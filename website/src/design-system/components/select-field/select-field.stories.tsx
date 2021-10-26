import { Meta } from "@storybook/react";
import { SelectField } from "./select-field";

const meta: Meta = {
  component: SelectField,
  title: "Design System/SelectField",

  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["primary"],
      },
    },
    size: {
      type: { name: "string" },
      defaultValue: "md",
    },
  },
};

export default meta;

export const Default = (args) => (
  <SelectField {...args}>
    <option value="1">Item 1</option>
    <option value="2">Item 2</option>
  </SelectField>
);

export const Disabled = (args) => (
  <SelectField {...args} disabled>
    <option value="1">Item 1</option>
    <option value="2">Item 2</option>
  </SelectField>
);

export const Error = (args) => (
  <SelectField {...args} state="invalid">
    <option value="1">Item 1</option>
    <option value="2">Item 2</option>
  </SelectField>
);
