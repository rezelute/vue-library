import type { Meta, StoryObj } from "@storybook/vue3-vite"
import SiteNavigation from "./SiteNavigation.vue"

const meta = {
   title: "Navigation/SiteNavigation",
   component: SiteNavigation,
   tags: ["autodocs"],
   parameters: {
      docs: {
         description: {
            component:
               "A site navigation bar with a slide-in drawer menu. Fully slot-based — the library owns layout and drawer behavior, the consumer owns all routing and content.",
         },
      },
   },
} satisfies Meta<typeof SiteNavigation>

export default meta
type Story = StoryObj<typeof meta>

// -----------------------------------------
// VARIABLES
// -----------------------------------------

const navLinkClass =
   "flex items-center gap-3 px-3 py-2.5 rounded-lg text-surface-700 dark:text-surface-200 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
const signUpClass =
   "flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors"
const contentBlock = `
      <div class="p-4">
        <h1 class="text-2xl font-bold">Content starts here</h1>
        <p>This should be right below the navbar</p>
      </div>
    `

const defaultLogo = `
        <template #logo>
          <a href="/" class="flex items-center gap-2">
            <img src="https://primefaces.org/cdn/primevue/images/logo.svg" alt="Logo" class="w-8 h-8" />
            <span class="font-semibold text-surface-800 dark:text-surface-100 text-base">Logo App Name</span>
          </a>
        </template>`

const defaultDrawerLogo = `
        <template #drawer-logo>
          <div class="flex items-center gap-2">
            <img src="https://primefaces.org/cdn/primevue/images/logo.svg" alt="Logo" class="w-7 h-7" />
            <span class="font-semibold text-surface-800 dark:text-surface-100">Logo App Name</span>
          </div>
        </template>`

const defaultMenuItems = `
        <template #menu-items="{ close }">
          <a href="/cheese" :class="linkClass" @click="close">
            <span class="pi pi-search text-base"></span>
            <span>Cheese Search</span>
          </a>
        </template>`

const signInSignUpFooter = `
        <template #menu-footer="{ close }">
          <a href="/signin" :class="linkClass" @click="close">
            <span class="pi pi-sign-in text-base"></span>
            <span>Sign in</span>
          </a>
          <a href="/signup" :class="signUpClass" @click="close">
            <span class="pi pi-user-plus text-base"></span>
            <span>Sign up</span>
          </a>
        </template>`

const signInOnlyFooter = `
        <template #menu-footer="{ close }">
          <a href="/signin" :class="linkClass" @click="close">
            <span class="pi pi-sign-in text-base"></span>
            <span>Sign in</span>
          </a>
        </template>`

// -----------------------------------------
// STORIES
// -----------------------------------------

// Action Items (icon buttons) story
export const ActionIconButtons: Story = {
   name: "Action Items: Icon Buttons",
   parameters: {
      docs: {
         description: {
            story: "Shows two icon-only action items in the action-items slot using PrimeVue Button with icons.",
         },
      },
   },
   render: () => ({
      components: { SiteNavigation },
      template: `
      <SiteNavigation>
        ${defaultLogo}
        ${defaultDrawerLogo}
        <template #action-items>
          <button class="p-button p-button-rounded p-button-text p-button-plain" aria-label="Notifications">
            <span class="pi pi-bell text-lg"></span>
          </button>
          <button class="p-button p-button-rounded p-button-text p-button-plain" aria-label="Settings">
            <span class="pi pi-cog text-lg"></span>
          </button>
        </template>
        ${defaultMenuItems}
      </SiteNavigation>
      ${contentBlock}
    `,
      setup() {
         return { linkClass: navLinkClass }
      },
   }),
}

export const DrawerFooterItems: Story = {
   name: "Drawer - Footer Items Available",
   render: () => ({
      components: { SiteNavigation },
      template: `
      <SiteNavigation>
        ${defaultLogo}
        ${defaultDrawerLogo}
        ${defaultMenuItems}
        ${signInSignUpFooter}
      </SiteNavigation>
      ${contentBlock}
    `,
      setup() {
         return { linkClass: navLinkClass, signUpClass }
      },
   }),
}

export const DrawerNoFooter: Story = {
   name: "Drawer - No Footer Slot",
   parameters: {
      docs: {
         description: { story: "Drawer renders gracefully when no menu-footer slot is provided." },
      },
   },
   render: () => ({
      components: { SiteNavigation },
      template: `
      <SiteNavigation>
        ${defaultLogo}
        ${defaultDrawerLogo}
        ${defaultMenuItems}
      </SiteNavigation>
      ${contentBlock}
    `,
      setup() {
         return { linkClass: navLinkClass }
      },
   }),
}

export const TallLogoImage: Story = {
   name: "Tall Logo Image",
   parameters: {
      docs: {
         description: {
            story: "Logo slot receives a tall image, navbar height remains fixed (h-16).",
         },
      },
   },
   render: () => ({
      components: { SiteNavigation },
      template: `
      <SiteNavigation>
        <template #logo>
          <a href="/" class="flex items-center h-full gap-2">
            <img src="https://primefaces.org/cdn/primevue/images/logo.svg" alt="Logo" class="h-20 w-auto" />
            <span class="font-semibold text-surface-800 dark:text-surface-100 text-base">Logo App Name</span>
          </a>
        </template>
        <template #drawer-logo>
          <div class="flex items-center gap-2">
            <img src="https://primefaces.org/cdn/primevue/images/logo.svg" alt="Logo" class="h-6 w-auto" />
            <span class="font-semibold text-surface-800 dark:text-surface-100">Logo App Name</span>
          </div>
        </template>
        ${defaultMenuItems}
        ${signInOnlyFooter}
      </SiteNavigation>
      ${contentBlock}
    `,
      setup() {
         return { linkClass: navLinkClass }
      },
   }),
}

// Dark background
export const DarkBackground: Story = {
   name: "Dark Background",
   parameters: {
      docs: {
         description: {
            story: "Preview nav against a dark page (Tailwind dark mode).",
         },
      },
   },
   decorators: [
      () => ({
         template: "<story />",
         mounted() {
            document.documentElement.classList.add("dark")
         },
         unmounted() {
            document.documentElement.classList.remove("dark")
         },
      }),
   ],
   render: () => ({
      components: { SiteNavigation },
      template: `
      <div class="dark min-h-screen bg-surface-900">
        <SiteNavigation>
          ${defaultLogo}
          ${defaultDrawerLogo}
          ${defaultMenuItems}
          ${signInSignUpFooter}
        </SiteNavigation>
        ${contentBlock}
      </div>
    `,
      setup() {
         return { linkClass: navLinkClass, signUpClass }
      },
   }),
}

// Individual prop stories

export const PositionFixed: Story = {
   name: "Position: Fixed",
   parameters: {
      layout: "fullscreen",
      docs: { description: { story: "Nav bar is fixed to top (position='fixed')." } },
   },
   render: () => ({
      components: { SiteNavigation },
      template: `
      <div style="min-height: 200vh;">
        <SiteNavigation position="fixed">
          ${defaultLogo}
          ${defaultDrawerLogo}
          ${defaultMenuItems}
          ${signInOnlyFooter}
        </SiteNavigation>
        ${contentBlock}
      </div>
    `,
      setup() {
         return { linkClass: navLinkClass }
      },
   }),
}

export const PositionSticky: Story = {
   name: "Position: Sticky",
   parameters: {
      layout: "fullscreen",
      docs: { description: { story: "Nav bar sticks on scroll (position='sticky')." } },
   },
   render: () => ({
      components: { SiteNavigation },
      template: `
      <div style="min-height: 200vh;">
        <div class="py-8">Content above sticky navbar</div>
        <SiteNavigation position="sticky">
          ${defaultLogo}
          ${defaultDrawerLogo}
          ${defaultMenuItems}
          ${signInOnlyFooter}
        </SiteNavigation>
        ${contentBlock}
      </div>
    `,
      setup() {
         return { linkClass: navLinkClass }
      },
   }),
}

export const NavHeightTall: Story = {
   name: "Nav Height: Tall",
   parameters: {
      docs: { description: { story: "Nav bar height is taller (navHeight='h-24')." } },
   },
   render: () => ({
      components: { SiteNavigation },
      template: `
      <SiteNavigation navHeight="h-24">
        <template #logo>
          <a href="/" class="flex items-center h-full gap-2">
            <img src="https://primefaces.org/cdn/primevue/images/logo.svg" alt="Logo" class="h-full w-auto" />
            <span class="font-semibold text-surface-800 dark:text-surface-100 text-base">Logo App Name</span>
          </a>
        </template>
        <template #drawer-logo>
          <div class="flex items-center gap-2">
            <img src="https://primefaces.org/cdn/primevue/images/logo.svg" alt="Logo" class="h-6 w-auto" />
            <span class="font-semibold text-surface-800 dark:text-surface-100">Logo App Name</span>
          </div>
        </template>
        ${defaultMenuItems}
        ${signInOnlyFooter}
      </SiteNavigation>
      ${contentBlock}
    `,
      setup() {
         return { linkClass: navLinkClass }
      },
   }),
}

export const BorderEnabled: Story = {
   name: "Border Enabled",
   parameters: {
      docs: { description: { story: "Nav bar shows border (border=true)." } },
   },
   render: () => ({
      components: { SiteNavigation },
      template: `
      <SiteNavigation :border="true">
        ${defaultLogo}
        ${defaultDrawerLogo}
        ${defaultMenuItems}
        ${signInOnlyFooter}
      </SiteNavigation>
      ${contentBlock}
    `,
      setup() {
         return { linkClass: navLinkClass }
      },
   }),
}

export const ShadowEnabled: Story = {
   name: "Shadow Enabled",
   parameters: {
      docs: { description: { story: "Nav bar shows shadow (shadow=true)." } },
   },
   render: () => ({
      components: { SiteNavigation },
      template: `
      <div>
        <SiteNavigation :shadow="true">
          ${defaultLogo}
          ${defaultDrawerLogo}
          ${defaultMenuItems}
          ${signInOnlyFooter}
        </SiteNavigation>
        ${contentBlock}
      </div>
    `,
      setup() {
         return { linkClass: navLinkClass }
      },
   }),
}

export const FrostedEnabled: Story = {
   name: "Frosted Enabled",
   parameters: {
      layout: "fullscreen",
      docs: {
         description: {
            story: "Nav bar has frosted glass effect (frosted=true). Scroll to see the blur effect on content behind the header.",
         },
      },
   },
   render: () => ({
      components: { SiteNavigation },
      template: `
      <div style="min-height: 120vh; background: #f9fafb;">
        <SiteNavigation :frosted="true" position="fixed">
          ${defaultLogo}
          ${defaultDrawerLogo}
          ${defaultMenuItems}
          ${signInOnlyFooter}
        </SiteNavigation>
        <div class="bg-primary py-20">
            <div>Content starts here</div>
            <p>Scroll down to see the frosted glass effect in action as the header blurs the content behind it.</p>
        </div>
      </div>
    `,
      setup() {
         return { linkClass: navLinkClass }
      },
   }),
}

export const ContainedDisabled: Story = {
   name: "Contained Disabled",
   parameters: {
      docs: { description: { story: "Nav bar is full-bleed (contained=false)." } },
   },
   render: () => ({
      components: { SiteNavigation },
      template: `
      <SiteNavigation :contained="false">
        ${defaultLogo}
        ${defaultDrawerLogo}
        ${defaultMenuItems}
        ${signInOnlyFooter}
      </SiteNavigation>
      ${contentBlock}
    `,
      setup() {
         return { linkClass: navLinkClass }
      },
   }),
}

export const ContainerClassCustom: Story = {
   name: "Container Class: Custom Max Width",
   parameters: {
      layout: "fullscreen",
      docs: {
         description: {
            story: "Uses `containerClass` to override the default `container mx-auto` with a specific max-width. Useful when a consumer app defines its own layout breakpoints rather than relying on the Tailwind `container` class.",
         },
      },
   },
   render: () => ({
      components: { SiteNavigation },
      template: `
      <SiteNavigation containerClass="max-w-3xl mx-auto">
        ${defaultLogo}
        ${defaultDrawerLogo}
        ${defaultMenuItems}
        ${signInOnlyFooter}
      </SiteNavigation>
      ${contentBlock}
    `,
      setup() {
         return { linkClass: navLinkClass }
      },
   }),
}

export const DrawerWidthCustom: Story = {
   name: "Drawer Width Custom",
   parameters: {
      docs: { description: { story: "Drawer width set to w-80! (drawerWidth='w-80!')." } },
   },
   render: () => ({
      components: { SiteNavigation },
      template: `
      <SiteNavigation drawerWidth="w-80!">
        ${defaultLogo}
        ${defaultDrawerLogo}
        ${defaultMenuItems}
        ${signInOnlyFooter}
      </SiteNavigation>
      ${contentBlock}
    `,
      setup() {
         return { linkClass: navLinkClass }
      },
   }),
}
