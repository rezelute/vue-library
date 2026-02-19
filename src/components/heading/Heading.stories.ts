import type { Meta, StoryObj } from "@storybook/vue3-vite"
import Heading from "./Heading.vue"

const meta = {
   title: "Typography/Heading",
   component: Heading,
   tags: ["autodocs"],
   argTypes: {
      textSize: {
         control: { type: "select" },
         options: ["sm", "md", "lg", "xl", "2xl", "3xl"],
      },
      marginBtmSize: {
         control: { type: "select" },
         options: ["sm", "md", "lg"],
      },
      tag: {
         control: { type: "select" },
         options: ["h1", "h2", "h3", "h4", "h5", "h6", "div", "span", "p"],
      },
      default: {
         control: false,
      },
   },
   args: {
      textSize: "lg",
      marginBtmSize: "md",
      tag: "h2",
      default: "Heading Text",
   },
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      textSize: "lg",
      marginBtmSize: "md",
      tag: "h2",
      default: "Heading Text",
   },
   render: (args) => ({
      components: { Heading },
      setup: () => ({ args }),
      template: `<Heading v-bind="args">{{ args.default }}</Heading>`,
   }),
}

export const AllSizes: Story = {
   render: () => ({
      components: { Heading },
      template: `
      <div>
        <Heading textSize="sm" marginBtmSize="sm">Small Heading</Heading>
        <Heading textSize="md" marginBtmSize="md">Medium Heading</Heading>
        <Heading textSize="lg" marginBtmSize="lg">Large Heading</Heading>
        <Heading textSize="xl">XL Heading</Heading>
        <Heading textSize="2xl">2XL Heading</Heading>
        <Heading textSize="3xl">3XL Heading</Heading>
      </div>
    `,
   }),
}

export const AllMargins: Story = {
   render: () => ({
      components: { Heading },
      template: `
      <div>
        <div style="border: 1px solid #999; margin-bottom: 10px;">
           <Heading textSize="lg" marginBtmSize="sm">Margin Bottom SM</Heading>
        </div>
        <div style="border: 1px solid #999; margin-bottom: 10px;">
           <Heading textSize="lg" marginBtmSize="md">Margin Bottom MD</Heading>
        </div>
        <div style="border: 1px solid #999">
           <Heading textSize="lg" marginBtmSize="lg">Margin Bottom LG</Heading>
        </div>
      </div>
    `,
   }),
}

export const CustomTag: Story = {
   args: {
      textSize: "xl",
      tag: "h1",
      default: "Custom Tag H1 Heading",
   },
   render: (args) => ({
      components: { Heading },
      setup: () => ({ args }),
      template: `<Heading v-bind="args">{{ args.default }}</Heading>`,
   }),
}
