<template>
   <Toast v-bind="$attrs" :on-mouse-enter="() => {}" :on-mouse-leave="() => {}" @close="$emit('close', $event)" @life-end="$emit('life-end', $event)">
      <template #container="{ message, closeCallback }">
         <div
            class="toast-progress-wrapper"
            @mouseenter="pausedMessages.add(message.id)"
            @mouseleave="pausedMessages.delete(message.id)"
         >
            <div class="p-toast-message-content">
               <component :is="iconComponent(message.severity)" class="p-toast-message-icon" />
               <div class="p-toast-message-text">
                  <span class="p-toast-summary">{{ message.summary }}</span>
                  <div v-if="message.detail" class="p-toast-detail">{{ message.detail }}</div>
               </div>
               <div v-if="message.closable !== false">
                  <button class="p-toast-close-button" type="button" aria-label="Close" @click="closeCallback">
                     <TimesIcon class="p-toast-close-icon" />
                  </button>
               </div>
            </div>
            <div
               v-if="message.life"
               class="toast-progress-bar"
               :style="{
                  animationDuration: `${message.life}ms`,
                  animationPlayState: pausedMessages.has(message.id) ? 'paused' : 'running',
               }"
            />
         </div>
      </template>
   </Toast>
</template>

<script setup lang="ts">
import CheckIcon from "@primevue/icons/check"
import ExclamationTriangleIcon from "@primevue/icons/exclamationtriangle"
import InfoCircleIcon from "@primevue/icons/infocircle"
import TimesIcon from "@primevue/icons/times"
import TimesCircleIcon from "@primevue/icons/timescircle"
import Toast from "primevue/toast"
import { reactive } from "vue"

defineEmits<{
   close: [payload: { message: object }]
   "life-end": [payload: { message: object }]
}>()

const pausedMessages = reactive(new Set<number>())

function iconComponent(severity?: string) {
   switch (severity) {
      case "success":
         return CheckIcon
      case "warn":
         return ExclamationTriangleIcon
      case "error":
         return TimesCircleIcon
      default:
         return InfoCircleIcon
   }
}
</script>

<style scoped>
.toast-progress-wrapper {
   min-height: 0;
   overflow: hidden;
}

@keyframes toast-progress-shrink {
   from {
      width: 100%;
   }
   to {
      width: 0%;
   }
}

.toast-progress-bar {
   height: 3px;
   width: 100%;
   /* currentColor inherits the severity color from .p-toast-message-{severity} */
   background-color: currentColor;
   animation: toast-progress-shrink linear forwards;
}
</style>
