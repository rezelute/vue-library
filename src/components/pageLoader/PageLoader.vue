<template>
   <div v-if="isLoading" class="border flex flex-grow items-center justify-center w-full">
      isLoading2 {{ isLoading }}
      <ProgressSpinner aria-label="Loading" />
      <Button
         type="button"
         @click="
            () => {
               console.log('hello');
            }
         "
         >Send deletion email</Button
      >
   </div>
   <div v-else>
      <slot />
   </div>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import ProgressSpinner from "primevue/progressspinner";

const props = withDefaults(
   defineProps<{
      isLoading: boolean;
   }>(),
   {
      isLoading: false,
   }
);
</script>

<style scoped></style>
