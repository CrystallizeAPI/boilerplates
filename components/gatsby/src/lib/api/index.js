import { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { setBaseUrl, doPost } from "./helpers"

export const doSearch = (body) => doPost(`/search`, { body })

export function CrystallizeApiProvider({ children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            crystallizeApiUrlBase
          }
        }
      }
    `
  )

  useEffect(() => {
    setBaseUrl(site.siteMetadata?.crystallizeApiUrlBase)
  }, [site])

  return children
}
