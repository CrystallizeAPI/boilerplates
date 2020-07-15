import React from "react"
import { I18nextProvider } from "lib/i18n"

export default function wrapWithLocaleProvider({
  element,
  props: {
    pageContext: { locale, locales },
  },
}) {
  return (
    <I18nextProvider locale={locale} locales={locales}>
      {element}
    </I18nextProvider>
  )
}
