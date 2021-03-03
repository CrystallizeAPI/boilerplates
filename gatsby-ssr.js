import React from "react"
import { AuthProvider } from "./src/components/auth"
import { I18nextProvider } from "lib/i18n"
import { BasketProvider } from "./src/components/basket"

// Wraps every page in a component
export const wrapPageElement = ({
  element,
  props: {
    pageContext: { locale, locales },
  },
}) => {
  return (
    <I18nextProvider locale={locale} locales={locales}>
      <AuthProvider>
        <BasketProvider>{element}</BasketProvider>
      </AuthProvider>
    </I18nextProvider>
  )
}
