/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import wrapWithLocaleProvider from "./wrap-with-locale-provider"
import "video.js/dist/video-js.css"
import "rc-slider/assets/index.css"
import "dashjs"
import "videojs-contrib-dash"

export const wrapPageElement = wrapWithLocaleProvider

export function shouldUpdateScroll({ prevRouterProps, routerProps }) {
  /**
   * When updating the search facets filter, we should not scroll
   * to top of the page
   */
  if (prevRouterProps?.pathname === routerProps.pathname) {
    return false
  }
}
