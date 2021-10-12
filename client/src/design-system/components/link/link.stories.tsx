import { Meta } from "@storybook/react";
import { Link } from "./link";

const meta: Meta = {
  component: Link,
  title: "Design System/Link",
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["default", "nav", "social", "secondary"],
      },
    },
  },
};

export default meta;

export const Default = (args) => (
  <Link {...args} href="https://google.com">
    Click me
  </Link>
);

export const Nav = (args) => (
  <Link variant="nav" {...args} href="https://google.com">
    Click me
  </Link>
);

export const Social = (args) => (
  <Link variant="social" {...args} href="https://google.com">
    Click me
  </Link>
);

export const Secondary = (args) => (
  <Link variant="secondary" {...args} href="https://google.com">
    Click me
  </Link>
);
