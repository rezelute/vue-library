<template>
   <PageLoader :isLoading="isPageLoading">
      <div class="container flex items-center justify-center w-full mt-12">
         <div v-if="!deleteToken" class="max-w-xl spacing-sections">
            <h1 class="h1 text-color">Account</h1>
            <ChangeEmail />
            <DeleteAccount />
         </div>
         <div v-else>
            <Card>
               <template #content>
                  <div class="spacing-elements p-12">
                     <p class="text-2xl">Deleting your account...</p>
                     <Spinner />
                  </div>
               </template>
            </Card>
         </div>
      </div>
   </PageLoader>
</template>

<script setup lang="ts">
import Spinner from "primevue/progressspinner";
import Card from "primevue/card";
import ChangeEmail from "@/components/account/changeEmail/ChangeEmail.vue";
import DeleteAccount from "@/components/account/deleteAccount/DeleteAccount.vue";
import PageLoader from "@/components/pageLoader/PageLoader.vue";
import Session from "supertokens-web-js/recipe/session";
import useToast from "@/utils/toast";

const { addToast } = useToast();
const route = useRoute();

// data
// -----------------------------------------
const isPageLoading = ref(false);
const deleteToken = ref(route.query.del_token as string | undefined);

// lifecycle
// -----------------------------------------
onMounted(() => {
   // check if the user has a deletion token in the URL using vue router
   if (deleteToken) {
      deleteAccount();
   }
});

// methods
// -----------------------------------------

// send a request to the server to delete the account
async function deleteAccount() {
   const deleteAccountErrorSummary = "We failed to delete your account!";
   const deleteAccountErrorDetail =
      "Something went wrong while deleting your account. Please try again or contact us to let us know about this issue.";

   try {
      const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/auth/delete-account`, {
         method: "DELETE",
         credentials: "include",
         headers: {
            "X-Delete-Token": deleteToken.value as string,
            "Content-Type": "application/json",
         },
      });

      const result = await response.json();
      if (!response.ok) {
         throw new Error(result.error || "Failed to delete account.");
      }

      await Session.signOut();
      window.location.href = "/goodbye";
   } catch (error) {
      addToast({
         severity: "error",
         summary: deleteAccountErrorSummary,
         detail: deleteAccountErrorDetail,
         life: 0,
         error: { msg: "Failed to delete user account", error },
      });

      deleteToken.value = undefined;
   }
}
</script>

<style lang="scss" scoped></style>
