import { DesignSystemProvider } from "../src/design-system";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <DesignSystemProvider>
      <Story />
    </DesignSystemProvider>
  ),
];
