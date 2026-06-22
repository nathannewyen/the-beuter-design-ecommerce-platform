import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Logo } from "./logo";

const meta: Meta<typeof Logo> = {
  title: "Brand/Logo",
  component: Logo,
  parameters: {
    docs: {
      description: {
        component:
          "Primary BEUTER® wordmark. Links to /. Use in the site sidebar and mobile top bar.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {};

export const Mobile: Story = {
  args: { className: "text-[20px]" },
  parameters: { docs: { description: { story: "Mobile top-bar size." } } },
};

export const OnDark: Story = {
  args: { className: "text-white" },
  parameters: { backgrounds: { default: "BEUTER black" } },
};
