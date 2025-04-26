<template>
   <div class="container flex items-center justify-center w-full">
      <div v-if="!deleteToken" class="max-w-xl">
         <h1 class="h1 text-color">Your account</h1>

         <div class="spacing-page-sections">
            <YourAccount />
            <ChangeEmail @error="onChangeEmailError" />
            <DeleteAccountRequest />
         </div>
      </div>
      <div v-else>
         <DeleteAccountAction :deleteToken="deleteToken" @error="onDeleteAccountError" />
      </div>
   </div>
</template>

<script setup lang="ts">
import ChangeEmail from "../components/account/ChangeEmail.vue";
import DeleteAccountRequest from "../components/account/DeleteAccountRequest.vue";
import DeleteAccountAction from "../components/account/DeleteAccountAction.vue";
import YourAccount from "../components/account/UserAccountInfo.vue";
// import PageLoader from "../components/pageLoader/PageLoader.vue";
import useToast from "../composables/toast";

const { addToast } = useToast();
const route = useRoute();

// data
// -----------------------------------------
// const isUserAccountLoading = ref(true);

const deleteToken = ref(route.query.del_token as string | undefined);

// methods
// -----------------------------------------
function onDeleteAccountError(error: any) {
   addToast({
      severity: "error",
      summary: error.summary,
      detail: error.detail,
      life: 0,
      error,
   });

   deleteToken.value = undefined;
}

function onChangeEmailError(error: any) {
   addToast({
      severity: "error",
      summary: error.summary,
      detail: error.detail,
      error,
   });
}

// computed
// -----------------------------------------
// const isPageLoading = computed(() => {
//    return isUserAccountLoading.value || ;
// });
</script>

<style scoped></style>
