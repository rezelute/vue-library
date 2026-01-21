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
