<template>
   <Card>
      <template #title>
         <slot name="header">
            <Heading tag="h2" textSize="md" marginBtmSize="sm">{{ headingText }}</Heading>
         </slot>
      </template>
      <template #content>
         <dl class="flex flex-col m-0 p-0">
            <!-- ID row -->
            <div
               class="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4 py-6 border-b border-surface first:pt-0 last:border-b-0 last:pb-0"
            >
               <dt
                  class="shrink-0 sm:w-20 text-xs font-semibold uppercase tracking-wide text-muted-color select-none"
               >
                  User ID
               </dt>
               <dd class="min-w-0 m-0 text-color">
                  <Skeleton
                     v-if="isLoading"
                     height="1.2rem"
                     :pt="{ root: { style: '', class: 'w-full sm:!w-52' } }"
                  />
                  <code
                     v-else
                     class="inline-block font-mono text-xs px-2 py-0.5 rounded bg-surface-100 text-primary break-all"
                     >{{ userId ?? "—" }}</code
                  >
               </dd>
            </div>

            <!-- Email row -->
            <div
               class="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4 py-6 border-b border-surface first:pt-0 last:border-b-0 last:pb-0"
            >
               <dt
                  class="shrink-0 sm:w-20 text-xs font-semibold uppercase tracking-wide text-muted-color select-none"
               >
                  Email
               </dt>
               <dd class="min-w-0 m-0">
                  <Skeleton
                     v-if="isLoading"
                     height="1.2rem"
                     :pt="{ root: { style: '', class: 'w-full sm:!w-52' } }"
                  />
                  <span v-else class="break-all">{{ userEmail ?? "—" }}</span>
               </dd>
            </div>
         </dl>
      </template>
   </Card>
</template>

<script setup lang="ts">
import Card from "primevue/card"
import Skeleton from "primevue/skeleton"
import Heading from "../heading/Heading.vue"

// lifecycle
// -----------------------------------------
const props = withDefaults(
   defineProps<{
      userId?: string
      userEmail?: string
      isLoading?: boolean
      headingText?: string
   }>(),
   {
      isLoading: false,
      headingText: "Your details",
   }
)
</script>
