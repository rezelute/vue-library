<template>
   <div>
      <div v-if="!isLoading" ref="container">
         <slot />
      </div>
      <Skeleton v-else width="100%" :height="skeletonHeight" />
   </div>
</template>

<script setup lang="ts">
import Skeleton from "primevue/skeleton"
import { computed, onMounted, ref } from "vue"

const props = withDefaults(
   defineProps<{
      isLoading: boolean
      height?: string
   }>(),
   {
      isLoading: false,
      height: "48px",
   }
)

// state
// -----------------------------------------
const textboxRef = ref<{ $el: HTMLElement } | null>(null)
const calculatedSkeletonHeight = ref("48px")

// lifecycle
// -----------------------------------------
onMounted(() => {
   if (textboxRef.value?.$el) {
      calculatedSkeletonHeight.value = `${textboxRef.value.$el.offsetHeight}px`
   }
})

// computed
// -----------------------------------------
const skeletonHeight = computed(() => {
   return props.height || calculatedSkeletonHeight.value
})
</script>

<style scoped></style>
