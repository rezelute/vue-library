<template>
   <div class="container flex items-center justify-center w-full">
      <Account
         :deleteToken="deleteToken"
         @changeEmailError="showToast"
         @deleteAccountRequestError="showToast"
         @deleteAccountError="onDeleteAccountError"
      />
   </div>
</template>

<script setup lang="ts">
import Account from "../components/account/Account.vue";
import useToast from "../composables/toast";

const { addToast } = useToast();
const route = useRoute();

// data
// -----------------------------------------
const deleteToken = ref(route.query.del_token as string | undefined);

// methods
// -----------------------------------------
function showToast(payload: EmitNotify) {
   addToast({
      ...payload,
      ...(payload.type !== "email_same_as_current" && { life: 0 }),
   });
}

function onDeleteAccountError(payload: EmitNotify) {
   addToast({
      ...payload,
      life: 0,
   });

   deleteToken.value = undefined;
}
</script>

<style scoped></style>
