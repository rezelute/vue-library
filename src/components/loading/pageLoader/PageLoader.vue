<template>
   <div v-if="isLoading" class="w-full">
      <div class="spacing-elements p-12">
         <slot name="loadingText"></slot>
         <ProgressSpinner aria-label="Loading" />
      </div>
   </div>
   <div v-else>
      <slot name="default" />
   </div>
</template>

<script setup lang="ts">
import ProgressSpinner from "primevue/progressspinner";

withDefaults(
   defineProps<{
      isLoading: boolean;
      loadingText?: string;
   }>(),
   {
      isLoading: false,
      loadingText: "",
   }
);
</script>

<style scoped></style>
