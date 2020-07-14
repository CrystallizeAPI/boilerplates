/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import wrapWithLocaleProvider from "./wrap-with-locale-provider"
import "video.js/dist/video-js.css"

export const wrapPageElement = wrapWithLocaleProvider
