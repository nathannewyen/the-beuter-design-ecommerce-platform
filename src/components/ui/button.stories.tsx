import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  args: { children: "Add to cart" },
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "ghost", "link"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    fullWidth: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: "primary" } };
export const Secondary: Story = { args: { variant: "secondary" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Link: Story = { args: { variant: "link", children: "Continue shopping" } };

export const Small: Story = { args: { size: "sm" } };
export const Large: Story = { args: { size: "lg" } };

export const FullWidth: Story = {
  args: { fullWidth: true, children: "Checkout" },
  decorators: [(Story) => <div className="w-[420px]"><Story /></div>],
};

export const Disabled: Story = { args: { disabled: true } };
