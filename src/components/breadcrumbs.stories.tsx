import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Breadcrumbs } from "./breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  title: "UI/Breadcrumbs",
  component: Breadcrumbs,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const ProductDetail: Story = {
  args: {
    items: [
      { label: "Shop", href: "/shop" },
      { label: "Women", href: "/shop?gender=womens" },
      { label: "BEUTER® WMNS SATIN SHIRT" },
    ],
  },
};

export const TwoLevel: Story = {
  args: {
    items: [
      { label: "Shop", href: "/shop" },
      { label: "Denim" },
    ],
  },
};
