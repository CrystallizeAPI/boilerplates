import { Meta } from "@storybook/react";
import { IconButton } from "./icon-button";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const meta: Meta = {
  component: IconButton,
  title: "Design System/Icon Button",
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["ghost", "raised"],
      },
    },
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
  <IconButton {...args}>
    <HamburgerMenuIcon />
  </IconButton>
);
