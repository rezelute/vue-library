<template>
   <div v-if="deleteToken" class="mt-10">
      <DeleteAccountAction
         :deleteToken="deleteToken"
         @deleteAccountError="(...args) => $emit('deleteAccountError', ...args)"
         @deleteAccountSuccess="(...args) => $emit('deleteAccountSuccess', ...args)"
      />
   </div>
   <div v-if="updateEmailToken" class="mt-10">
      <ChangeEmailAction
         :updateEmailToken="updateEmailToken"
         @changeEmailActionError="(...args: any[]) => $emit('changeEmailActionError', ...args)"
         @changeEmailActionSuccess="onChangeEmailActionSuccess"
      />
   </div>
   <div v-else class="max-w-xl mt-10">
      <slot id="header">
         <h1 class="h1 text-color">Your account</h1>
      </slot>

      <div class="spacing-page-sections">
         <UserAccountInfo :updatedEmailDate="updatedEmailDate" />
         <ChangeEmailRequest
            @changeEmailRequestError="(...args) => $emit('changeEmailRequestError', ...args)"
            @changeEmailActionSuccess="onChangeEmailActionSuccess"
         />
         <DeleteAccountRequest
            @deleteAccountRequestError="(...args) => $emit('deleteAccountRequestError', ...args)"
            @deleteAccountRequestSuccess="(...args) => $emit('deleteAccountRequestSuccess', ...args)"
         />
      </div>
   </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ChangeEmailRequest from "./ChangeEmailRequest.vue";
import DeleteAccountRequest from "./DeleteAccountRequest.vue";
import DeleteAccountAction from "./DeleteAccountAction.vue";
import UserAccountInfo from "./UserAccountInfo.vue";
import ChangeEmailAction from "./ChangeEmailAction.vue";
import { type EmitNotify } from "../../types";

const emits = defineEmits([
   "deleteAccountRequestError",
   "deleteAccountRequestSuccess",
   "changeEmailRequestError",
   "changeEmailRequestSuccess",
   "changeEmailActionError",
   "changeEmailActionSuccess",
   "deleteAccountError",
   "deleteAccountSuccess",
]);

defineProps<{
   deleteToken?: string | undefined;
   updateEmailToken?: string | undefined;
}>();

// data
// -----------------------------------------
// this is used to tell the UserAccountInfo component to refresh the email after a successful email change
// updates to the latest date and time
const updatedEmailDate = ref<Date | null>(null);

// methods
// -----------------------------------------
function onChangeEmailActionSuccess(payload: EmitNotify) {
   // update the date to trigger a refresh in UserAccountInfo component
   updatedEmailDate.value = new Date();

   emits("changeEmailActionSuccess", payload);
}
</script>

<style scoped></style>
