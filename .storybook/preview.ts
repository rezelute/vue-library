import "../src/assets/styles/main.css"
import "primeicons/primeicons.css"
import { definePreset } from "@primeuix/themes"
import Lara from "@primeuix/themes/lara"
import { setup } from "@storybook/vue3"
import type { Preview } from "@storybook/vue3-vite"
import PrimeVue from "primevue/config"
import { MINIMAL_VIEWPORTS } from "storybook/viewport"
import { onMounted, onUnmounted, watch } from "vue"

// Green theme
const preset1 = {
   semantic: {
      primary: {
         50: "{green.50}",
         100: "{green.100}",
         200: "{green.200}",
         300: "{green.300}",
         400: "{green.400}",
         500: "{green.500}",
         600: "{green.600}",
         700: "{green.700}",
         800: "{green.800}",
         900: "{green.900}",
         950: "{green.950}",
      },
      colorScheme: {
         light: {
            surface: {
               0: "#fff",
               50: "{amber.50}",
               100: "{zinc.100}",
               200: "{zinc.200}",
               300: "{zinc.300}",
               400: "{zinc.400}",
               500: "{zinc.500}",
               600: "{zinc.600}",
               700: "{zinc.700}",
               800: "{zinc.800}",
               900: "{zinc.900}",
               950: "{zinc.950}",
            },
         },
         dark: {
            surface: {
               0: "{amber.50}",
               50: "{slate.50}",
               100: "{slate.50}",
               200: "{slate.100}",
               300: "{slate.200}",
               400: "{slate.300}",
               500: "{slate.400}",
               600: "{slate.500}",
               700: "{slate.600}",
               800: "{slate.700}",
               900: "{slate.800}",
               950: "{slate.950}",
            },
         },
      },
   },
   components: {
      menubar: {
         colorScheme: {
            light: {
               root: {
                  background: "#fff",
               },
            },
            dark: {
               root: {
                  background: "{surface.900}",
               },
            },
         },
      },
   },
}

const MyPreset = definePreset(Lara, preset1)

// Setup Vue plugins globally for all stories
setup((app) => {
   app.use(PrimeVue, {
      theme: {
         preset: MyPreset,
         options: {
            darkModeSelector: ".dark",
         },
      },
   })
})

const preview: Preview = {
   decorators: [
      // Applies dark mode class to <html> when darkMode parameter is set,
      // so PrimeVue's darkModeSelector: ".dark" picks it up correctly.
      (story, context) => {
         const isDarkMode = !!context.parameters.darkMode

         return {
            components: { story },
            setup() {
               onMounted(() => {
                  document.documentElement.classList.toggle("dark", isDarkMode)
               })
               onUnmounted(() => {
                  document.documentElement.classList.remove("dark")
               })
            },
            template: `<story />`,
         }
      },
      // Wraps every story in the same off-white background the consumer app uses,
      // so Cards and other surface components are visible against the page.
      (story, context) => {
         const { layout, minHeight, padding } = context.parameters
         const isFullscreen = layout === "fullscreen"

         const height = minHeight || (isFullscreen ? "100vh" : "auto")
         const pad = isFullscreen ? "0" : padding || "1rem"

         return {
            components: { story },
            template: `<div style="min-height:${height}; padding:${pad}; background:#f5f5f5;"><story /></div>`,
         }
      },
   ],
   parameters: {
      viewport: {
         options: MINIMAL_VIEWPORTS,
      },
      initialGlobals: {
         viewport: { value: "ipad", isRotated: false },
      },

      controls: {
         matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
         },
      },

      a11y: {
         // 'todo' - show a11y violations in the test UI only
         // 'error' - fail CI on a11y violations
         // 'off' - skip a11y checks entirely
         test: "todo",
      },
   },
}

export default preview
