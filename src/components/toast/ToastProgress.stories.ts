import type { Meta, StoryObj } from "@storybook/vue3-vite"
import ToastEventBus from "primevue/toasteventbus"
import { h } from "vue"
import ToastProgress from "./ToastProgress.vue"

const meta = {
   title: "Feedback/ToastProgress",
   component: ToastProgress,
   tags: ["autodocs"],
   parameters: {
      docs: {
         description: {
            component:
               "A drop-in replacement for PrimeVue `<Toast />` that adds a progress bar. Works with `useToast()` exactly the same way.",
         },
      },
   },
} satisfies Meta<typeof ToastProgress>

export default meta

type Story = StoryObj<typeof meta>

// Unique group per mount — Storybook renders stories in both Canvas and Docs simultaneously,
// so a static group string would cause both instances to receive the same ToastEventBus events.
function makeGroup(prefix: string) {
   return `${prefix}-${Math.random().toString(36).slice(2)}`
}

function trigger(group: string, severity: string, summary: string, detail: string, life?: number) {
   ToastEventBus.emit("add", { severity, summary, detail, life, group })
}

const buttonStyle = (color: string) =>
   `padding: 0.5rem 1.25rem; border-radius: 6px; border: none; cursor: pointer; font-size: 0.875rem; background: ${color}; color: #fff;`

export const AllSeverities: Story = {
   render: () => ({
      components: { ToastProgress },
      setup() {
         const group = makeGroup("all-severities")
         return () =>
            h("div", { style: "display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;" }, [
               h(ToastProgress, { position: "top-right", group }),
               h("p", { style: "color: #555; font-size: 0.875rem; margin: 0;" }, "Click a button to trigger a toast (5s timer):"),
               h("div", { style: "display: flex; gap: 0.75rem; flex-wrap: wrap;" }, [
                  h("button", { style: buttonStyle("#22c55e"), onClick: () => trigger(group, "success", "Success", "Your changes have been saved.", 5000) }, "Success"),
                  h("button", { style: buttonStyle("#3b82f6"), onClick: () => trigger(group, "info", "Info", "A new update is available.", 5000) }, "Info"),
                  h("button", { style: buttonStyle("#f59e0b"), onClick: () => trigger(group, "warn", "Warning", "Your session is about to expire.", 5000) }, "Warning"),
                  h("button", { style: buttonStyle("#ef4444"), onClick: () => trigger(group, "error", "Error", "Something went wrong. Please try again.", 5000) }, "Error"),
               ]),
            ])
      },
   }),
}

export const LongLife: Story = {
   name: "Long Timer (10s)",
   render: () => ({
      components: { ToastProgress },
      setup() {
         const group = makeGroup("long-life")
         return () =>
            h("div", { style: "display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;" }, [
               h(ToastProgress, { position: "top-right", group }),
               h("p", { style: "color: #555; font-size: 0.875rem; margin: 0;" }, "10 second timer — hover the toast to pause the bar:"),
               h("button", { style: buttonStyle("#22c55e"), onClick: () => trigger(group, "success", "Long Timer", "Hover me to pause the progress bar.", 10000) }, "Trigger (10s)"),
            ])
      },
   }),
}

export const Sticky: Story = {
   name: "Sticky (no progress bar)",
   render: () => ({
      components: { ToastProgress },
      setup() {
         const group = makeGroup("sticky")
         return () =>
            h("div", { style: "display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;" }, [
               h(ToastProgress, { position: "top-right", group }),
               h("p", { style: "color: #555; font-size: 0.875rem; margin: 0;" }, "No life set — toast stays until dismissed, no progress bar shown:"),
               h("button", { style: buttonStyle("#6366f1"), onClick: () => trigger(group, "info", "Sticky Toast", "No progress bar here.") }, "Trigger sticky"),
            ])
      },
   }),
}
