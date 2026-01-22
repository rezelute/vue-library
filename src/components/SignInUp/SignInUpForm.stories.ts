import type { Meta, StoryObj } from "@storybook/vue3-vite"
import SignInUpForm from "./SignInUpForm.vue"

const meta = {
   title: "SignInUp/SignInUpForm",
   component: SignInUpForm,
   tags: ["autodocs"],
   argTypes: {
      pageAuthType: { control: { type: "select", options: ["sign-in", "sign-up"] } },
      isSignupInviteOnly: { control: "boolean" },
      isSignupLoading: { control: "boolean" },
   },
   args: {
      pageAuthType: "sign-in",
      isSignupInviteOnly: false,
      isSignupLoading: false,
      email: "",
   },
} satisfies Meta<typeof SignInUpForm>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      pageAuthType: "sign-in",
      isSignupInviteOnly: false,
      isSignupLoading: false,
      email: "",
   },
}

export const SignUp: Story = {
   args: {
      pageAuthType: "sign-up",
      email: "",
   },
}

// Story demonstrating the 'additional-fields' slot with an image and isSubmitClicked
export const WithAdditionalFields: Story = {
   render: (args, { slots }) => ({
      components: { SignInUpForm },
      setup() {
         return { args }
      },
      template: `
         <SignInUpForm v-bind="args">
            <template #additional-fields="slotProps">
               <div style="text-align: center;">
                  <img src="/src/stories/assets/cloudflare.png" alt="Cloudflare Captcha" style="max-width: 260px; margin-bottom: 0.5rem;" />
                  <div style="font-size: 0.9em; color: #888;">
                     Captcha required. Submit clicked: <b>{{ slotProps.isSubmitClicked ? 'Yes' : 'No' }}</b>
                  </div>
               </div>
            </template>
         </SignInUpForm>
      `,
   }),
   args: {
      pageAuthType: "sign-up",
      email: "",
   },
   parameters: {
      docs: {
         description: {
            story: "Demonstrates usage of the 'additional-fields' slot, rendering a captcha image and showing the isSubmitClicked value.",
         },
      },
   },
}

export const Loading: Story = {
   args: {
      isSignupLoading: true,
      email: "",
   },
}

export const InviteOnlyOnSignUp: Story = {
   args: {
      isSignupInviteOnly: true,
      pageAuthType: "sign-up",
      email: "",
   },
}

export const InviteOnlyOnSignIn: Story = {
   args: {
      isSignupInviteOnly: true,
      pageAuthType: "sign-in",
      email: "",
   },
}

export const WithGoogleAuth: Story = {
   args: {
      pageAuthType: "sign-in",
      enableThirdPartyAuth: { useGoogle: true },
      email: "",
   },
}
