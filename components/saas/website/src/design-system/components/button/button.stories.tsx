import { Meta } from "@storybook/react";
import { Button } from "./button";
import { Box } from "../box";

const meta: Meta = {
  component: Button,
  title: "Design System/Button",
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["primary", "secondary"],
      },
    },
    on: {
      control: {
        type: "radio",
        options: ["default", "primary"],
      },
    },
  },
};

export default meta;

export const Default = (args) => <Button {...args}>Click me</Button>;

export const Primary = (args) => (
  <Box>
    <Box css={{ backgroundColor: "$white", padding: "$4" }}>
      <Button {...args}>Click me</Button>
    </Box>
    <Box css={{ backgroundColor: "$primary", padding: "$4" }}>
      <Button on="primary" {...args}>
        Click me
      </Button>
    </Box>
  </Box>
);

export const Secondary = (args) => (
  <Box>
    <Box css={{ backgroundColor: "$white", padding: "$4" }}>
      <Button variant="secondary" {...args}>
        Click me
      </Button>
    </Box>
    <Box css={{ backgroundColor: "$primary", padding: "$4" }}>
      <Button variant="secondary" on="primary" {...args}>
        Click me
      </Button>
    </Box>
  </Box>
);

export const Disabled = (args) => (
  <Box>
    <Box css={{ backgroundColor: "$white", padding: "$4" }}>
      <Button disabled {...args}>
        Click me
      </Button>
    </Box>
    <Box css={{ backgroundColor: "$primary", padding: "$4" }}>
      <Button on="primary" disabled {...args}>
        Click me
      </Button>
    </Box>
  </Box>
);
