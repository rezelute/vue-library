<template>
   <div class="px-4 py-8 sm:p-8">
      <!-- Back button sits above the card, outside it -->
      <div class="max-w-xl mx-auto mb-2">
         <Button
            type="button"
            variant="text"
            icon="pi pi-arrow-left"
            label="Start over"
            aria-label="Restart authentication process"
            data-test="auth-change-email"
            @click="onRestartFlow"
         />
      </div>

      <Card class="max-w-xl p-0 sm:p-12 w-full mx-auto">
         <template #title>
            <Heading tag="h1" textSize="md" marginBtmSize="sm">{{ title }}</Heading>
         </template>
         <template #content>
            <form class="vstack-md" @submit.prevent>
               <!-- Code input & Submit -->
               <div class="vstack-form">
                  <!-- Description text (e.g. explain the code and its expiry time) -->
                  <slot name="description" />

                  <FormField
                     id="magic-code-input"
                     :error="showError ? codeValidationMessage : ''"
                     data-test="auth-error-message"
                  >
                     <InputOtp
                        id="magic-code-input"
                        v-model="userMagicCode"
                        :length="otpLength"
                        required
                        :invalid="showError"
                        data-test="auth-code-input"
                     />
                  </FormField>
                  <Button
                     label="Submit code"
                     class="w-fit"
                     type="submit"
                     :loading="isSubmittingCode"
                     :disabled="isResendingCode"
                     data-test="auth-verify-button"
                     @click="onCodeSubmit"
                  />
               </div>

               <Divider />

               <!-- Code re-send -->
               <div class="vstack-form">
                  <!-- Resend description (e.g. junk folder reminder) -->
                  <slot name="resend-description" />

                  <Button
                     class="w-fit"
                     label="Resend code"
                     variant="outlined"
                     type="button"
                     :loading="isResendingCode"
                     :disabled="isSubmittingCode"
                     data-test="auth-resend-code"
                     @click="onResendCode"
                  />
               </div>
            </form>
         </template>
      </Card>
   </div>
</template>

<script setup lang="ts">
import Button from "primevue/button"
import Card from "primevue/card"
import Divider from "primevue/divider"
import InputOtp from "primevue/inputotp"
import { computed, ref } from "vue"
import FormField from "../../components/formField/FormField.vue"
import Heading from "../heading/Heading.vue"

// props & emits
// -----------------------------------------
const emits = defineEmits(["codeSubmit", "codeResendSubmit", "restartFlow"])
const props = withDefaults(
   defineProps<{
      /** Override the card title */
      title?: string
      /** Length of the OTP code */
      otpLength?: number
      /** Server-side error message (e.g. invalid or expired code) */
      errorMessage?: string
      isSubmittingCode: boolean
      isResendingCode: boolean
   }>(),
   {
      title: "Input validation code",
      otpLength: 6,
   }
)

// state
// -----------------------------------------
const userMagicCode = ref("") // user input code
const isSubmitClicked = ref(false) // To show validation errors

// computed
// -----------------------------------------
const isCodeLengthValid = computed(() => {
   return userMagicCode.value.length === props.otpLength
})

const codeValidationMessage = computed(() => {
   if (!isCodeLengthValid.value) {
      return `The code must be ${props.otpLength} characters long.`
   }
   if (props.errorMessage) {
      return props.errorMessage
   }
   return ""
})

const showError = computed(() => {
   return isSubmitClicked.value && codeValidationMessage.value.length > 0
})

// methods
// -----------------------------------------
/** If the code is valid, we tell the parent so it can redirect to the home page  */
async function onCodeSubmit() {
   isSubmitClicked.value = true

   // if the code is not valid, do not emit
   if (!isCodeLengthValid.value) {
      return
   }

   emits("codeSubmit", userMagicCode.value)
}

//** Resend OTP code which might have not been received by the user */
async function onResendCode() {
   emits("codeResendSubmit")
}

function onRestartFlow() {
   emits("restartFlow")
}
</script>

<style scoped></style>
