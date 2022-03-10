/**
 * Locale aware link
 */
import React from "react"
import { Link as GatsbyLink } from "gatsby"

import { useLocale } from "lib/i18n"

export default function Link({ children, ...props }) {
  const locale = useLocale()

  if (!locale.urlPrefix) {
    return <GatsbyLink {...props}>{children}</GatsbyLink>
  }

  const { to, ...restProps } = props

  return (
    <GatsbyLink
      to={`/${locale.urlPrefix}/${to}`.replace(/\/{2,}/g, "/")}
      {...restProps}
    >
      {children}
    </GatsbyLink>
  )
}
