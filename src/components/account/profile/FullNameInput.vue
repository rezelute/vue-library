<template>
   <div>
      <label v-if="labelText" for="firstName">First name</label>
      <Textbox
         id="firstName"
         :modelValue="firstName"
         :invalid="showError"
         placeholder="First name"
         required
         class="w-full"
         @update:modelValue="onFirstNameInput"
      />
      <Message v-if="showError" severity="error" size="small" variant="simple">
         {{ nameInvalidText }}
      </Message>

      <label v-if="labelText" for="lastName">
         Last name <span v-if="!isLastNameRequired">(optional)</span>
      </label>
      <Textbox
         id="lastName"
         :modelValue="lastName"
         :invalid="showError"
         placeholder="Last name"
         :required="isLastNameRequired"
         class="w-full"
         @update:modelValue="onLastNameInput"
      />
      <Message v-if="showError" severity="error" size="small" variant="simple">
         {{ nameInvalidText }}
      </Message>
   </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import Textbox from "primevue/inputtext";
import Message from "primevue/message";
import { z } from "zod";

// Emit
const emit = defineEmits<{
   (e: "validity-changed", value: boolean): void;
}>();

// Props
const props = defineProps<{
   isLastNameRequired?: boolean; // false by default
   isSubmitClicked: boolean;
   labelText?: string;
}>();

// Data
// -----------------------------------------
const nameInvalidText = "Name can be letters only, at least 2 characters and max 50 characters";
// Two-way binding
const firstName = defineModel<string>("firstName", { required: true });
const lastName = defineModel<string>("lastName", { required: true });

// lifecycle
// -----------------------------------------
onMounted(() => {
   // Emit initial validity
   emit("validity-changed", validateName());
});

// computed
// -----------------------------------------
const showError = computed(() => props.isSubmitClicked && !validateName());

// methods
// -----------------------------------------
const nameSchema = z.object({
   firstName: z.string().min(2, "First name is required").max(50, "First name is too long"),
   lastName: props.isLastNameRequired
      ? z.string().min(2, "Last name is required").max(50, "Last name is too long")
      : z
           .string()
           .max(50, "Last name is too long")
           .optional()
           // if last name is optional, it can be undefined or empty
           // but if provided, it must be at least 2 characters
           .refine((val) => val === undefined || val === "" || val.length >= 2, {
              message: "Last name must be at least 2 characters if provided",
           }),
});
function validateName() {
   const validation = nameSchema.safeParse({
      firstName: firstName.value,
      lastName: lastName.value,
   });

   return validation.success;
}

function onFirstNameInput(value: string | undefined) {
   const sanitizedValue = value ?? "";
   firstName.value = sanitizedValue;
   emit("validity-changed", validateName());
}

function onLastNameInput(value: string | undefined) {
   const sanitizedValue = value ?? "";
   lastName.value = sanitizedValue;
   emit("validity-changed", validateName());
}
</script>
