<template>
   <header
      class="fixed top-0 left-0 right-0 z-50 h-16 bg-surface-0 dark:bg-surface-900 border-b border-surface-200 dark:border-surface-700"
   >
      <div class="container mx-auto h-full px-4">
         <nav class="flex items-center h-full gap-4">
            <!-- Logo slot: auto-sizes to content, never overflows nav height -->
            <div class="flex items-center h-full py-2 shrink-0 overflow-hidden">
               <slot name="logo" />
            </div>

            <!-- Right side -->
            <div class="flex items-center gap-3 ml-auto">
               <slot name="action-items" />

               <Button
                  icon="pi pi-bars"
                  text
                  rounded
                  aria-label="Open navigation menu"
                  aria-haspopup="true"
                  data-test="sitenav-toggle-btn"
                  @click="drawerOpen = true"
               />
            </div>
         </nav>
      </div>
   </header>

   <!-- Spacer so page content isn't hidden under fixed nav -->
   <div class="h-16" />

   <!-- Drawer -->
   <Drawer
      v-model:visible="drawerOpen"
      position="right"
      :pt="{
         root: 'w-100!',
         header: 'pb-6!',
      }"
   >
      <template #header>
         <div class="flex items-center h-10 px-1">
            <slot name="drawer-logo" />
         </div>
      </template>

      <template #default>
         <div class="flex flex-col h-full">
            <!-- Nav items -->
            <nav class="flex flex-col gap-1">
               <slot name="menu-items" :close="closeDrawer" />
            </nav>

            <!-- Bottom section: auth actions -->
            <div
               v-if="$slots['menu-footer']"
               class="border-t border-surface-200 dark:border-surface-700 pt-4 pb-2 flex flex-col gap-1 mt-10"
            >
               <slot name="menu-footer" :close="closeDrawer" />
            </div>
         </div>
      </template>
   </Drawer>
</template>

<script setup lang="ts">
import Button from "primevue/button"
import Drawer from "primevue/drawer"
import { ref } from "vue"
import ThemeToggle from "../../components/themeToggle/ThemeToggle.vue"

const drawerOpen = ref(false)

function closeDrawer() {
   drawerOpen.value = false
}
</script>
