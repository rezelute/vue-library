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
import profileService from "../../services/account/profileService";
import { useRouter } from "vue-router";

const router = useRouter();

const emits = defineEmits(["profileCompletionError", "profileIsComplete", "profileNotComplete"]);

// lifecycle
// -----------------------------------------
onMounted(async () => {
   try {
      const profileComplete = await profileService.getProfileCompletion();
      // profile is complete, go to home page OR to redirect query param if exists (e.g. /home?redirect=/some-page)
      if (profileComplete) {
         const redirect = router.currentRoute.value.query.redirect as string | undefined;
         if (redirect) {
            router.push(redirect);
         } else {
            router.push({ name: "home" });
         }
      }
      // Profile not complete, redirect to the profile completion page (preserve query params)
      else {
         router.push({ name: "profile", query: router.currentRoute.value.query });
      }
   } catch (error) {
      console.error("Error checking profile completion: ", error);
      // application decides how to handle the error
      emits("profileCompletionError");
   }
});
</script>

<style scoped></style>
