<template>
   <component :is="tag" :class="['heading', textSize, marginSize]">
      <slot />
   </component>
</template>

<script setup lang="ts">
import { computed } from "vue"

export interface HeadingProps {
   textSize?:
      | "heading-sm"
      | "heading-md"
      | "heading-lg"
      | "heading-xl"
      | "heading-2xl"
      | "heading-3xl"
   marginSize?: "heading-mb-sm" | "heading-mb-md" | "heading-mb-lg"
   tag?: string
}

const props = defineProps<HeadingProps>()

const textSize = computed(() => props.textSize || "heading-lg")
const marginSize = computed(() => props.marginSize || "")
const tag = computed(() => props.tag || "h2")
</script>

<!--
Usage:
<Heading textSize="heading-2xl" marginSize="heading-mb-lg">My Heading</Heading>
-->

<style scoped>
@reference "tailwindcss";

.heading {
   @apply font-semibold tracking-tight;
}

/* text size styles */
.heading-sm {
   @apply text-base md:text-lg;
}
.heading-md {
   @apply text-lg md:text-xl;
}
.heading-lg {
   @apply text-xl md:text-2xl;
}
.heading-xl {
   @apply text-2xl md:text-3xl;
}
.heading-2xl {
   @apply text-3xl md:text-4xl;
}
.heading-3xl {
   @apply text-4xl md:text-5xl;
}

/* margin bottom styles */
.heading-mb-sm {
   @apply mb-4 sm:mb-6;
}
.heading-mb-md {
   @apply mb-6 sm:mb-8;
}
.heading-mb-lg {
   @apply mb-8 sm:mb-10;
}
</style>
