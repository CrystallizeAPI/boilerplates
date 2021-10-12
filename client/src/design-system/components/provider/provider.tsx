import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

import { FC } from "react";
import { IdProvider } from "@radix-ui/react-id";
import { global } from "@/design-system/theme";

const globalStyles = global({
  "*": {
    fontFamily: "$body",
  },
});

export const DesignSystemProvider: FC = ({ children }) => {
  globalStyles();

  return <IdProvider>{children}</IdProvider>;
};
