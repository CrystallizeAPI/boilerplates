import { Meta } from "@storybook/react";
import { Box } from "../box";
import { space } from "../../theme/spacing";

import { Spacer } from "./spacer";

const meta: Meta = {
  component: Spacer,
  title: "Design System/Spacer",
  argTypes: {
    direction: {
      options: ["horizontal", "vertical"],
      control: {
        type: "radio",
      },
      defaultValue: "vertical",
    },
    space: {
      control: {
        type: "select",
        options: Object.keys(space),
      },
    },
  },
};

export default meta;

export const Vertical = (args) => (
  <>
    <Box css={{ width: "100px", height: "100px", bg: "red" }}></Box>
    <Spacer {...args} />
    <Box css={{ width: "100px", height: "100px", bg: "green" }}></Box>
  </>
);

export const Horizontal = (args) => (
  <Box css={{ display: "flex" }}>
    <Box css={{ width: "100px", height: "100px", bg: "red" }}></Box>
    <Spacer {...args} />
    <Box css={{ width: "100px", height: "100px", bg: "green" }}></Box>
  </Box>
);
