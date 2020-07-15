import React, { createContext, useContext } from "react"
import i18n from "i18next"

const I18NextContext = createContext()

export const useT = () => {
  const c = useContext(I18NextContext)

  return (val, options) => c?.i18n?.t(val, options)
}

export const useLocale = () => {
  const c = useContext(I18NextContext)

  return c?.locale
}

export const useLocales = () => {
  const c = useContext(I18NextContext)

  return c?.locales
}

export function I18nextProvider({ locale = {}, locales = [], children }) {
  const lng = locale.appLanguage || "en-US"

  const currencyFormatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: locale.defaultCurrency || "USD",
  })

  i18n.init({
    resources: {
      [lng]: locale.resources || {},
    },
    lng,

    interpolation: {
      escapeValue: false, // react already safe from xss
      format: function (value, format) {
        if (format === "uppercase") {
          return value.toUpperCase()
        }

        if (format === "currency") {
          return currencyFormatter.format(value)
        }

        return value
      },
    },
  })

  return (
    <I18NextContext.Provider value={{ i18n, locale, locales }}>
      {children}
    </I18NextContext.Provider>
  )
}
