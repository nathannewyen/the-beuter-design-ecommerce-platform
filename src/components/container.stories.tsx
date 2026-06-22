import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Container } from "./container";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
  parameters: { layout: "fullscreen" },
  argTypes: {
    size: { control: "select", options: ["narrow", "default", "wide", "full"] },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

const Demo = (
  <div className="bg-line/40 h-40 flex items-center justify-center text-foreground/80">
    Container content
  </div>
);

export const Default: Story = { args: { size: "default", children: Demo } };
export const Narrow: Story = { args: { size: "narrow", children: Demo } };
export const Wide: Story = { args: { size: "wide", children: Demo } };
export const Full: Story = { args: { size: "full", children: Demo } };
