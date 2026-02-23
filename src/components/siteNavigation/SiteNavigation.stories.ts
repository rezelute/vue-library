import type { Meta, StoryObj } from "@storybook/vue3-vite"
import SiteNavigation from "./SiteNavigation.vue"

const meta = {
   title: "Navigation/SiteNavigation",
   component: SiteNavigation,
   tags: ["autodocs"],
   parameters: {
      layout: "fullscreen",
      docs: {
         description: {
            component:
               "A fixed-height site navigation bar with a slide-in drawer menu. Fully slot-based — the library owns layout and drawer behavior, the consumer owns all routing and content.",
         },
      },
   },
} satisfies Meta<typeof SiteNavigation>

export default meta
type Story = StoryObj<typeof meta>

// -------------------------------------------------------
// Shared helpers
// -------------------------------------------------------

const navLinkClass =
   "flex items-center gap-3 px-3 py-2.5 rounded-lg text-surface-700 dark:text-surface-200 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"

const signOutClass =
   "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"

const signUpClass =
   "flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors"

// Logo template — reused across stories as an inline template string
// NOTE: no JS interpolation, just a plain string used inside each story's template
const logoTemplate = `
  <template #logo>
    <a href="/" class="flex items-center gap-2">
      <div class="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center">
        <span class="pi pi-bolt text-white text-sm"></span>
      </div>
      <span class="font-semibold text-surface-800 dark:text-surface-100 text-base">Logo App Name</span>
    </a>
  </template>
  <template #drawer-logo>
    <div class="flex items-center gap-2">
      <div class="w-7 h-7 rounded-lg bg-primary-500 flex items-center justify-center">
        <span class="pi pi-bolt text-white text-xs"></span>
      </div>
      <span class="font-semibold text-surface-800 dark:text-surface-100">Logo App Name</span>
    </div>
  </template>
`

// -------------------------------------------------------
// Signed Out
// -------------------------------------------------------

export const SignedOut: Story = {
   name: "Signed Out (3 items)",
   render: () => ({
      components: { SiteNavigation },
      template: `
      <SiteNavigation>
        ${logoTemplate}

        <template #menu-items="{ close }">
          <a href="/food" :class="linkClass" @click="close">
            <span class="pi pi-search text-base"></span>
            <span>Food Search</span>
          </a>
        </template>

        <template #menu-footer="{ close }">
          <a href="/signin" :class="linkClass" @click="close">
            <span class="pi pi-sign-in text-base"></span>
            <span>Sign in</span>
          </a>
          <a href="/signup" :class="signUpClass" @click="close">
            <span class="pi pi-user-plus text-base"></span>
            <span>Sign up</span>
          </a>
        </template>
      </SiteNavigation>
    `,
      setup() {
         return { linkClass: navLinkClass, signUpClass }
      },
   }),
}

// -------------------------------------------------------
// Signed In
// -------------------------------------------------------

export const SignedIn: Story = {
   name: "Signed In (5 items)",
   render: () => ({
      components: { SiteNavigation },
      template: `
      <SiteNavigation>
        ${logoTemplate}

        <template #menu-items="{ close }">
          <a
            v-for="item in navItems"
            :key="item.to"
            :href="item.to"
            :data-test="item.testId"
            :class="linkClass"
            @click="close"
          >
            <span :class="item.icon" class="text-base"></span>
            <span>{{ item.label }}</span>
          </a>
        </template>

        <template #menu-footer="{ close }">
          <button :class="signOutClass" @click="close">
            <span class="pi pi-sign-out text-base"></span>
            <span>Sign out</span>
          </button>
        </template>
      </SiteNavigation>
    `,
      setup() {
         return {
            linkClass: navLinkClass,
            signOutClass,
            navItems: [
               { label: "Home", icon: "pi pi-home", to: "/home", testId: "nav-home" },
               { label: "Food Search", icon: "pi pi-search", to: "/food", testId: "nav-food" },
               { label: "My Profile", icon: "pi pi-user", to: "/profile", testId: "nav-profile" },
               { label: "Settings", icon: "pi pi-cog", to: "/settings", testId: "nav-settings" },
               {
                  label: "Dashboard",
                  icon: "pi pi-chart-bar",
                  to: "/dashboard",
                  testId: "nav-dashboard",
               },
            ],
         }
      },
   }),
}

// -------------------------------------------------------
// Image Logo
// -------------------------------------------------------

export const ImageLogo: Story = {
   name: "With Image Logo",
   render: () => ({
      components: { SiteNavigation },
      template: `
      <SiteNavigation>
        <template #logo>
          <a href="/">
            <img
              src="https://primefaces.org/cdn/primevue/images/logo.svg"
              alt="Logo"
              class="h-8 w-auto"
            />
          </a>
        </template>
        <template #drawer-logo>
          <img
            src="https://primefaces.org/cdn/primevue/images/logo.svg"
            alt="Logo"
            class="h-6 w-auto"
          />
        </template>

        <template #menu-items="{ close }">
          <a href="/food" :class="linkClass" @click="close">
            <span class="pi pi-search text-base"></span>
            <span>Food Search</span>
          </a>
        </template>

        <template #menu-footer="{ close }">
          <a href="/signin" :class="linkClass" @click="close">
            <span class="pi pi-sign-in text-base"></span>
            <span>Sign in</span>
          </a>
          <a href="/signup" :class="signUpClass" @click="close">
            <span class="pi pi-user-plus text-base"></span>
            <span>Sign up</span>
          </a>
        </template>
      </SiteNavigation>
    `,
      setup() {
         return { linkClass: navLinkClass, signUpClass }
      },
   }),
}

// -------------------------------------------------------
// Tall Logo
// -------------------------------------------------------

export const TallLogo: Story = {
   name: "Tall Logo (navbar stays fixed height)",
   parameters: {
      docs: {
         description: {
            story: "Passing a tall logo into the slot — the navbar height should remain h-16 with the logo constrained by the slot wrapper.",
         },
      },
   },
   render: () => ({
      components: { SiteNavigation },
      template: `
      <SiteNavigation>
        <template #logo>
          <a href="/" class="flex items-center gap-2">
            <div class="h-20 w-20 bg-primary-200 rounded flex items-center justify-center text-xs text-primary-800 font-bold">
              Tall Logo
            </div>
          </a>
        </template>
        <template #drawer-logo>
          <span class="font-semibold">Tall Logo</span>
        </template>

        <template #menu-items="{ close }">
          <a href="/food" :class="linkClass" @click="close">
            <span class="pi pi-search text-base"></span>
            <span>Food Search</span>
          </a>
        </template>

        <template #menu-footer="{ close }">
          <a href="/signin" :class="linkClass" @click="close">
            <span class="pi pi-sign-in text-base"></span>
            <span>Sign in</span>
          </a>
        </template>
      </SiteNavigation>
    `,
      setup() {
         return { linkClass: navLinkClass }
      },
   }),
}

// -------------------------------------------------------
// No Footer
// -------------------------------------------------------

export const NoFooter: Story = {
   name: "No Footer Slot (edge case)",
   parameters: {
      docs: {
         description: {
            story: "Verifies the drawer renders gracefully when no menu-footer slot is provided.",
         },
      },
   },
   render: () => ({
      components: { SiteNavigation },
      template: `
      <SiteNavigation>
        ${logoTemplate}

        <template #menu-items="{ close }">
          <a href="/food" :class="linkClass" @click="close">
            <span class="pi pi-search text-base"></span>
            <span>Food Search</span>
          </a>
          <a href="/about" :class="linkClass" @click="close">
            <span class="pi pi-info-circle text-base"></span>
            <span>About</span>
          </a>
        </template>
      </SiteNavigation>
    `,
      setup() {
         return { linkClass: navLinkClass }
      },
   }),
}
