<template>
   <div>
      <label v-if="labelText" for="email">{{ labelText }}</label>
      <Textbox
         id="email"
         :modelValue="email"
         :invalid="showError"
         placeholder="Email"
         required
         class="w-full"
         @update:modelValue="onInput"
      />
      <Message v-if="showError" severity="error" size="small" variant="simple">
         {{ emailInvalidText }}
      </Message>
   </div>
</template>

<script setup lang="ts">
import Textbox from "primevue/inputtext";
import Message from "primevue/message";
import { validateEmail } from "../../utils/validation";

// Two-way binding
const email = defineModel<string>("email", { required: true });

// Props
const props = defineProps<{
   isSubmitClicked: boolean;
   labelText?: string;
}>();

// Emit
const emit = defineEmits<{
   (e: "validity-changed", value: boolean): void;
}>();

const emailInvalidText = "Please enter a valid email address";

// lifecycle
// -----------------------------------------
onMounted(() => {
   // Emit initial validity
   emit("validity-changed", validateEmail(email.value));
});

// computed
// -----------------------------------------
const showError = computed(() => props.isSubmitClicked && !validateEmail(email.value));

// methods
// -----------------------------------------
function onInput(value: string | undefined) {
   const sanitizedValue = value ?? "";
   email.value = sanitizedValue;
   emit("validity-changed", validateEmail(sanitizedValue));
}
</script>
