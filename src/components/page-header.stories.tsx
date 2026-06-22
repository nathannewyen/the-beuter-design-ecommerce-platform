import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PageHeader } from "./page-header";

const meta: Meta<typeof PageHeader> = {
  title: "Layout/PageHeader",
  component: PageHeader,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {
  args: {
    eyebrow: "Studio",
    title: "Worldwide shipping",
    description: "Flat-rate shipping via DHL Express. All duties and taxes calculated at checkout.",
  },
};

export const TitleOnly: Story = { args: { title: "Policy" } };
