<template>
   <header :class="headerClasses">
      <div :class="innerClasses">
         <nav aria-label="Top navigation bar" class="flex items-center h-full gap-4 p-1">
            <div class="flex items-center h-full py-2 shrink-0 overflow-hidden">
               <slot name="logo" />
            </div>
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

   <!-- Spacer only needed when fixed, since fixed elements leave the normal flow -->
   <div v-if="needsSpacer" :class="navHeight" aria-hidden="true" />

   <Drawer
      v-model:visible="drawerOpen"
      position="right"
      aria-label="Navigation menu panel"
      :pt="{
         root: drawerWidth,
         header: 'pb-6!',
      }"
   >
      <!-- drawer header -->
      <template #header>
         <div class="flex items-center h-10 px-1">
            <slot name="drawer-logo" />
         </div>
      </template>

      <!-- drawer content -->
      <template #default>
         <div class="flex flex-col h-full">
            <!-- drawer main items  -->
            <nav aria-label="Main navigation" class="flex flex-col gap-1 p-3">
               <slot name="menu-items" :close="closeDrawer" />
            </nav>

            <!-- drawer footer items -->
            <div
               v-if="$slots['menu-footer']"
               class="border-t border-surface-200 dark:border-surface-700 pt-4 pb-2 flex flex-col gap-1 mt-20"
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
import { computed } from "vue"

interface SiteNavigationProps {
   /**
    * Controls how the nav is positioned in the document.
    * - 'fixed'  → pinned to top, requires spacer (handled internally)
    * - 'sticky' → sticks on scroll, no spacer needed (in normal flow)
    * - 'static' → normal document flow, no spacer needed
    */
   position?: "fixed" | "sticky" | "static"
   navHeight?: string
   /** Show a border beneath the nav */
   border?: boolean
   /** Add a subtle drop shadow (alternative or complement to border) */
   shadow?: boolean
   /** Frosted glass effect — applies backdrop-blur + semi-transparent bg */
   frosted?: boolean
   /** Constrain inner content to a max-width container, or go full-bleed */
   contained?: boolean
   drawerWidth?: string
}

const props = withDefaults(defineProps<SiteNavigationProps>(), {
   position: "fixed",
   navHeight: "h-16",
   border: true,
   shadow: false,
   frosted: false,
   contained: true,
   drawerWidth: "w-100!",
})

const drawerOpen = defineModel("drawerOpen", { default: false })

function closeDrawer() {
   drawerOpen.value = false
}

const headerClasses = computed(() => [
   // Positioning
   props.position === "fixed" && "fixed top-0 left-0 right-0 z-50",
   props.position === "sticky" && "sticky top-0 z-50",
   props.position === "static" && "relative",

   props.navHeight,

   // Background
   props.frosted
      ? "bg-surface-0/80 dark:bg-surface-900/80 backdrop-blur-md"
      : "bg-surface-0 dark:bg-surface-900",

   // Border
   props.border && "border-b border-surface-200 dark:border-surface-700",

   // Shadow
   props.shadow && "shadow-md",
])

const innerClasses = computed(() => ["h-full px-4", props.contained && "container mx-auto"])

// Only fixed positioning requires a spacer — sticky/static are in normal flow
const needsSpacer = computed(() => props.position === "fixed")
</script>
