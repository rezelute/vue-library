<template>
   <!-- Check profile completion -->
   <Card>
      <template #content>
         <div class="spacing-elements p-12">
            <Spinner />
         </div>
      </template>
   </Card>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import profileService from "../../../services/account/profileService";
import { useRouter, useRoute } from "vue-router";
import { getRedirectTargetWithQueryParams } from "../../../utils/url";

const route = useRoute();
const router = useRouter();

const emits = defineEmits(["profileCheckError", "profileIsComplete", "profileNotComplete"]);

// lifecycle
// -----------------------------------------
onMounted(async () => {
   checkProfileCompletion();
});

// methods
// -----------------------------------------
async function checkProfileCompletion() {
   try {
      const { data } = await profileService.getProfile();

      // profile is complete, go to home page OR to redirect query param if exists (e.g. /home?redirect=/some-page)
      if (data.isComplete) {
         const redirect = getRedirectTargetWithQueryParams(route.query);
         if (redirect) {
            router.push(redirect);
         } else {
            router.push({ name: "home" });
         }
      }
      // Profile not complete, redirect to the profile completion page (preserve query params)
      else {
         router.push({ name: "profile", query: route.query });
      }
   } catch (err) {
      console.error("Error checking profile completion: ", err);
      // application decides how to handle the error
      emits("profileCheckError");
   }
}
</script>

<style scoped></style>
