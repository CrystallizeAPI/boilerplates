/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// import wrapWithLocaleProvider from "./wrap-with-locale-provider"
// import "video.js/dist/video-js.css"
// import "rc-slider/assets/index.css"
// import "dashjs"
// import "videojs-contrib-dash"

// export const wrapPageElement = wrapWithLocaleProvider

// export function shouldUpdateScroll({ prevRouterProps, routerProps }) {
//   /**
//    * When updating the search facets filter, we should not scroll
//    * to top of the page
//    */
//   if (prevRouterProps?.pathname === routerProps.pathname) {
//     return false
//   }
// }

import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"
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
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider locale={locale} locales={locales}>
        <AuthProvider>
          <BasketProvider>{element}</BasketProvider>
        </AuthProvider>
      </I18nextProvider>
    </QueryClientProvider>
  )
}
