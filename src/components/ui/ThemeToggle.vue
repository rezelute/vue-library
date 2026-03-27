<template>
   <Button
      id="themeToggle"
      :icon="themeIcon"
      variant="outlined"
      aria-label="Toggle theme"
      @click="toggleTheme()"
   />
</template>

<script setup lang="ts">
import Button from "primevue/button"
import { computed, onMounted, ref } from "vue"

const theme = ref("light") // default matches SSR render to avoid hydration mismatch

// computed
// -----------------------------------------
const themeIcon = computed(() => (theme.value === "light" ? "pi pi-sun" : "pi pi-moon"))

// lifecycle
// -----------------------------------------
onMounted(() => {
   const lsTheme = localStorage.getItem("theme") || "light"
   theme.value = lsTheme
   document.documentElement.classList.toggle("dark", lsTheme === "dark")
})

// methods
// -----------------------------------------
function toggleTheme() {
   const newTheme = theme.value === "light" ? "dark" : "light"
   localStorage.setItem("theme", newTheme) // Save theme preference to local storage
   theme.value = newTheme
   document.documentElement.classList.toggle("dark", newTheme === "dark")
}
</script>

<style scoped></style>
