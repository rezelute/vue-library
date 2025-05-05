<template>
   <div class="flex flex-grow items-center justify-center w-full">
      <SignInUp @notify="onSignInUpError" />
   </div>
</template>

<script setup lang="ts">
import SignInUp from "../components/SignInUp/SignInUp.vue";
import useToast from "@/composables/toast";

const { addToast } = useToast();

function onSignInUpError(payload: EmitNotify) {
   addToast({
      ...payload,
      life: 0,
   });
}
</script>

<style scoped></style>
