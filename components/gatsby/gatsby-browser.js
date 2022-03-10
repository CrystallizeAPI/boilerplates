/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"

import { I18nextProvider } from "lib/i18n"
import { CrystallizeApiProvider } from "lib/api"
import { AuthProvider } from "components/auth"
import { BasketProvider } from "components/basket"

const queryClient = new QueryClient()

// Wraps every page with shared components
export function wrapPageElement({
  element,
  props: {
    pageContext: { locale, locales },
  },
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider locale={locale} locales={locales}>
        <AuthProvider>
          <CrystallizeApiProvider>
            <BasketProvider>{element}</BasketProvider>
          </CrystallizeApiProvider>
        </AuthProvider>
      </I18nextProvider>
    </QueryClientProvider>
  )
}
