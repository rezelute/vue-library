<template>
   <Card class="max-w-xl p-12 w-full">
      <template #title>
         <Heading tag="h1" textSize="lg" marginBtmSize="sm">
            {{ title }}
         </Heading>
      </template>
      <template #content>
         <!-- Notice banner (e.g. invite-only message, maintenance warning) -->
         <slot name="notice" />

         <!-- OAuth providers (e.g. Google sign-in button) -->
         <slot name="oauth-providers" />

         <!-- Divider — only rendered when the oauth-providers slot is used -->
         <div v-if="slots['oauth-providers']" class="flex items-center my-10">
            <hr class="flex-1 border-gray-300" />
            <span class="px-4 text-gray-500 uppercase">Or</span>
            <hr class="flex-1 border-gray-300" />
         </div>

         <form class="vstack-form" data-test="auth-form" @submit.prevent>
            <!-- Description text (e.g. passwordless explanation) -->
            <slot name="description" />

            <EmailInput
               v-model:email="email"
               :isSubmitClicked="isSubmitClicked"
               data-test="auth-email-input"
               @validity-changed="onValidityChanged"
            />

            <!-- Additional fields (e.g. captcha). isSubmitClicked is passed down so slot content
                 knows when the user first attempted submission — use it to delay showing
                 validation errors until after the first submit click. -->
            <slot name="additional-fields" :isSubmitClicked="isSubmitClicked" />

            <Button
               :label="submitText"
               type="button"
               :loading="loading"
               data-test="auth-send-code-button"
               @click="onSubmit"
            />
         </form>
      </template>
   </Card>
</template>

<script setup lang="ts">
import Button from "primevue/button"
import Card from "primevue/card"
import { ref, type Slots, useSlots } from "vue"
import EmailInput from "../../components/account/EmailInput.vue"
import Heading from "../heading/Heading.vue"

// props/emits
// -----------------------------------------
const emits = defineEmits(["submit"])

withDefaults(
   defineProps<{
      /** Override the card title */
      title?: string
      /** Override the submit button label */
      submitText?: string
      loading?: boolean
   }>(),
   {
      title: "Sign in",
      submitText: "Sign in",
      loading: false,
   }
)

const slots: Slots = useSlots()

// models
// -----------------------------------------
const email = defineModel<string>("email", { required: true })

// state
// -----------------------------------------
const isEmailValid = ref<boolean>(false)
const isSubmitClicked = ref(false) // To show validation errors

// methods
// -----------------------------------------
function onValidityChanged(isValid: boolean) {
   isEmailValid.value = isValid
}

async function onSubmit() {
   isSubmitClicked.value = true

   emits("submit", {
      email: email.value,
      isValid: isEmailValid.value,
   })
}
</script>

<style scoped></style>
