import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { fn } from "storybook/test"
import PageLoader from "./PageLoader.vue"

const meta = {
   title: "Feedback/PageLoader",
   component: PageLoader,
   tags: ["autodocs"],
   argTypes: {
      showLoading: { control: "boolean" },
      showError: { control: "boolean" },
      loadingText: { control: "text" },
      // No controls for slots, but we can show usage in stories
   },
   args: {
      showLoading: true,
      showError: false,
      loadingText: "Loading, please wait...",
   },
} satisfies Meta<typeof PageLoader>

export default meta

type Story = StoryObj<typeof meta>

// -----------------------------------------
// Stories
// -----------------------------------------
export const Default: Story = {
   parameters: {
      layout: "fullscreen",
   },
   args: {
      showLoading: true,
      showError: false,
      loadingText: "Loading, please wait...",
   },
}

export const ErrorTextDefault: Story = {
   parameters: {
      padding: "0.5em",
   },
   args: {
      showLoading: false,
      showError: true,
      loadingText: "",
   },
   render: (args: any) => ({
      components: { PageLoader },
      setup: () => ({ args, onRetry: fn() }),
      template: `<PageLoader v-bind="args" @retry="onRetry" />`,
   }),
}

export const ErrorTextOverride: Story = {
   parameters: {
      padding: "0.5em",
   },
   args: {
      showLoading: false,
      showError: true,
      errorText: "Custom error: Unable to connect to server.",
      loadingText: "",
   },
   render: (args: any) => ({
      components: { PageLoader },
      setup: () => ({ args, onRetry: fn() }),
      template: `<PageLoader v-bind="args" @retry="onRetry" />`,
   }),
}

export const WithCustomText: Story = {
   parameters: {
      layout: "fullscreen",
   },
   args: {
      showLoading: true,
      showError: false,
      loadingText: "Fetching your data...",
   },
}

export const ErrorStateDark: Story = {
   parameters: {
      padding: "0.5em",
      darkMode: true,
   },
   args: {
      showLoading: false,
      showError: true,
      loadingText: "",
   },
   render: (args: any) => ({
      components: { PageLoader },
      setup: () => ({ args, onRetry: fn() }),
      template: `<PageLoader v-bind="args" @retry="onRetry" />`,
   }),
}

export const LoadedState: Story = {
   args: {
      showLoading: false,
      showError: false,
      loadingText: "",
   },
   render: (args: any) => ({
      components: { PageLoader },
      setup: () => ({ args }),
      template: `<PageLoader v-bind="args"><template #default><div style='padding:2rem;text-align:center;'>Loaded content!</div></template></PageLoader>`,
   }),
}

export const WithPreloadSlot: Story = {
   parameters: {
      layout: "fullscreen",
   },
   args: {
      showLoading: true,
      showError: false,
      loadingText: "",
   },
   render: (args: any) => ({
      components: { PageLoader },
      setup: () => ({ args }),
      template: `<PageLoader v-bind="args"><template #preloader><div style='padding:2rem;text-align:center;'>Custom Preloader...</div></template></PageLoader>`,
   }),
}

export const SpinnerWithLoadingText: Story = {
   parameters: {
      layout: "fullscreen",
   },
   args: {
      showLoading: true,
      showError: false,
      loadingText: "Loading spinner with text...",
   },
}
