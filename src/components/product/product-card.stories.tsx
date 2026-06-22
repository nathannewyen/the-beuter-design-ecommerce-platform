import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProductCard } from "./product-card";
import { products } from "@/data/products";

const meta: Meta<typeof ProductCard> = {
  title: "Product/ProductCard",
  component: ProductCard,
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="w-[340px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

const satinShirt = products.find((p) => p.slug === "wmns-satin-shirt-ash-blue")!;
const distressedJeans = products.find(
  (p) => p.slug === "washed-distressed-straight-jeans-brown",
)!;
const halterPolo = products.find(
  (p) => p.slug === "wmns-deep-v-halter-polo-white",
)!;

export const Default: Story = { args: { product: satinShirt } };
export const OnSale: Story = {
  args: { product: distressedJeans },
  parameters: {
    docs: { description: { story: "compareAtPrice present – sale badge variant." } },
  },
};
export const NewArrival: Story = { args: { product: halterPolo } };

export const InGrid: Story = {
  decorators: [
    (Story) => (
      <div className="grid grid-cols-3 gap-x-6 gap-y-14 w-[1080px]">
        <Story />
        <Story />
        <Story />
      </div>
    ),
  ],
  args: { product: satinShirt },
  parameters: { layout: "fullscreen" },
};
