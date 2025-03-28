<template>
   <!-- Delete account -->
   <Card>
      <template #title>
         <h2 class="h2">Delete your account</h2>
      </template>
      <template #content>
         <div v-if="!isDeleteEmailSent" class="spacing-elements">
            <p>
               You will receive an email to verify your account deletion. Please click on the email link to
               delete your account.
            </p>

            <Button type="button" @click="sendDeleteEmail">Send deletion email</Button>
         </div>
         <p v-else class="action-confirm-msg">
            <i class="pi pi-envelope text-primary"></i>
            <span>
               We have sent you an email to verify your account deletion. Please check your inbox and click on
               the verification link.
            </span>
         </p>
      </template>
   </Card>
</template>

<script setup lang="ts">
import Card from "primevue/card";
import Button from "primevue/button";
import useToast from "@/utils/toast";
import accountService from "@/services/account/accountService";

const { addToast, toastContent } = useToast();

// data
// -----------------------------------------
const isDeleteEmailSent = ref(false);

// methods
// -----------------------------------------
// send a request to the server to send a deletion email
async function sendDeleteEmail() {
   try {
      const response = await accountService.requestDelete();
      if (!response.ok) {
         throw new Error(`Error requesting account deletion: ${response.status} - ${response.statusText}`);
      }
      // request deletion email sent successfully, show confirmation message
      else {
         isDeleteEmailSent.value = true;
      }
   } catch (error) {
      isDeleteEmailSent.value = false;

      addToast({
         severity: "error",
         summary: toastContent.error.somethingWentWrong.summary,
         detail: toastContent.error.somethingWentWrong.detail,
         error,
      });
   }
}
</script>

<style scoped></style>
