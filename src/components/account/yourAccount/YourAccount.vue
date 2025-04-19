<template>
   <Card>
      <template #title>
         <h2 class="h2">Your details</h2>
      </template>
      <template #content>
         <div class="spacing-elements">
            <div v-if="userId" class="flex flex-row gap-2">
               <div>ID:</div>
               <div>
                  <code class="text-primary break-all">
                     {{ userId }}
                  </code>
               </div>
            </div>

            <div v-if="userEmail" class="flex flex-row gap-2">
               <div>Email:</div>
               <div>
                  <strong class="text-primary break-all px-2">
                     {{ userEmail }}
                  </strong>
               </div>
            </div>
         </div>
      </template>
   </Card>
</template>

<script setup lang="ts">
import Card from "primevue/card";
import Session from "supertokens-web-js/recipe/session";
import accountService from "../../../services/account/accountService";

const userId = ref("");
const userEmail = ref("");

// lifecycle
// -----------------------------------------
onMounted(() => {
   getUserInfo();
});

// methods
// -----------------------------------------
async function getUserInfo() {
   try {
      userId.value = await Session.getUserId();
      const response = await accountService.getEmail();

      if (!response.ok) {
         throw new Error(`Error getting user email: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      userEmail.value = data.email;
   } catch (error) {
      console.error("Error fetching user email: ", error);
   }
}
</script>

<style scoped></style>
