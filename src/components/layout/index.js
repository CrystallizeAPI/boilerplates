import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Header from "./header"
import { Outer as O } from "ui"
import GlobalStyle from "ui/global"
import SEO from "components/seo"
import { useT } from "lib/i18n"

export * from "./crystallize-fragments"

const Outer = styled(O)`
  min-height: auto;
`
const Layout = ({ headerItems, children, title }) => {
  const t = useT()

  return (
    <>
      <GlobalStyle />
      <SEO title={title} />
      <Header headerItems={headerItems} />
      <main>{children}</main>
      <footer style={{ margin: "4rem 0 2rem", textAlign: "center" }}>
        <Outer>
          <span
            dangerouslySetInnerHTML={{
              __html: t("layout.builtWith", {
                link: `<a href="https://www.gatsbyjs.org">Gatsby</a>`,
              }),
            }}
          />
          {` `}|{` `}
          <span
            dangerouslySetInnerHTML={{
              __html: t("layout.poweredBy", {
                link: `<a href="https://www.crystallize.com">Crystallize</a>`,
              }),
            }}
          />
        </Outer>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
