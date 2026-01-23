<template>
   <slot v-if="!isLoading" />
   <Skeleton v-else width="100%" :height="height" />
</template>

<script setup lang="ts">
import Skeleton from "primevue/skeleton"

withDefaults(
   defineProps<{
      isLoading: boolean
      height?: string
   }>(),
   {
      isLoading: false,
      height: "2.4rem",
   }
)
</script>

<style scoped></style>
