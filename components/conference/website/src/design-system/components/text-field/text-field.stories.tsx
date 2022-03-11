import { Meta } from "@storybook/react";
import { TextField } from "./text-field";

import { FacebookIcon } from "@/design-system/theme/icons";

const meta: Meta = {
  component: TextField,
  title: "Design System/TextField",
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["primary"],
      },
    },
    on: {
      control: {
        type: "radio",
        options: ["default", "primary"],
      },
    },
    size: {
      type: { name: "string" },
      defaultValue: "md",
    },
  },
};

export default meta;

export const Default = (args) => <TextField {...args} />;

export const Disabled = (args) => (
  <TextField {...args} defaultValue="Hello" disabled />
);

export const Error = (args) => (
  <TextField {...args} state="invalid" defaultValue="Something wrong..." />
);

export const WithLeadingIcon = (args) => (
  <TextField {...args} LeadingIcon={FacebookIcon} />
);

export const WithTrailingIcon = (args) => (
  <TextField {...args}  />
);
