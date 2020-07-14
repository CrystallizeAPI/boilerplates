import React from "react"
import { I18nextProvider } from "lib/i18n"

export default function wrapWithLocaleProvider({
  element,
  props: {
    pageContext: { locale },
  },
}) {
  return <I18nextProvider locale={locale}>{element}</I18nextProvider>
}
