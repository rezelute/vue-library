<template>
   <!-- Update email action -->
   <Card>
      <template #content>
         <div class="spacing-elements p-12">
            <p class="text-2xl">Updating your email address, please dont close this window.</p>
            <Spinner />
         </div>
      </template>
   </Card>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Spinner from "primevue/progressspinner";
import Card from "primevue/card";
import accountService from "@/services/account/accountService";
import { type EmitNotify } from "../../types";

const emits = defineEmits(["changeEmailActionError", "changeEmailActionSuccess"]);
const props = defineProps<{
   updateEmailToken: string;
}>();

// lifecycle
// -----------------------------------------
onMounted(async () => {
   if (props.updateEmailToken) {
      await updateEmail();
   }
});

// methods
// -----------------------------------------
// send a request to the server along with the token to update the email address
async function updateEmail() {
   const updateEmailErrorSummary = "Failed to update your email!";
   const updateEmailErrorGenericDetail =
      "Something went wrong while updating your email. Please try again or contact us to let us know about this issue.";
   const updateEmailErrorInvalidTokenDetail =
      "The email verification token is invalid or has expired. Please try again.";

   try {
      const data = await accountService.updateEmail(props.updateEmailToken);

      if (data.status === "OK") {
         emits("changeEmailActionSuccess", {
            type: "email_already_verified",
            severity: "success",
            summary: "updateEmailSuccessSummary",
            detail: "updateEmailSuccessDetail",
         } satisfies EmitNotify);
      } else if (data.status === "EMAIL_VERIFICATION_INVALID_TOKEN_ERROR") {
         emits("changeEmailActionError", {
            type: "email_verification_invalid_token",
            severity: "error",
            summary: updateEmailErrorSummary,
            detail: updateEmailErrorInvalidTokenDetail,
         } satisfies EmitNotify);
      }
      // response was ok but the status was not OK, throw the response to be handled in the catch block
      else {
         throw new Error(
            `Unexpected response status: ${data.status}. Expected 'OK' or 'EMAIL_VERIFICATION_INVALID_TOKEN_ERROR'.`
         );
      }
   } catch (err) {
      emits("changeEmailActionError", {
         type: "unexpected",
         severity: "error",
         summary: updateEmailErrorSummary,
         detail: updateEmailErrorGenericDetail,
         json: err,
      } satisfies EmitNotify);
   }
}
</script>

<style scoped></style>
