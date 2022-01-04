import { Meta } from "@storybook/react";
import { Avatar } from "./avatar";

const meta: Meta = {
  component: Avatar,
  title: "Design System/Avatar",
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: ["1", "2", "3", "4"],
      },
    },
  },
};

export default meta;

export const Default = (args) => (
  <Avatar
    src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
    alt="Colm Tuite"
    fallback="CT"
    size="2"
    {...args}
  >
    Click me
  </Avatar>
);
