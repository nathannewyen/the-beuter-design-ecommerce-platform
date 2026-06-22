import type { Preview } from "@storybook/nextjs-vite";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    backgrounds: {
      default: "BEUTER white",
      values: [
        { name: "BEUTER white", value: "#ffffff" },
        { name: "BEUTER black", value: "#000000" },
      ],
    },
    layout: "centered",
    a11y: { test: "todo" },
  },
  decorators: [
    (Story) => (
      <div className="font-sans text-foreground">
        <Story />
      </div>
    ),
  ],
};

export default preview;
