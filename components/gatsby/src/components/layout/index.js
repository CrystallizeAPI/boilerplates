import React from "react"
import PropTypes from "prop-types"
import GlobalStyle from "ui/global"
import SEO from "components/seo"
import CrystallizeLayout from "@crystallize/react-layout"

import Header from "./header"
import Footer from "./footer"
import Aside from "./aside"

export * from "./crystallize-fragments"

const Layout = ({ headerItems, children, title }) => {
  return (
    <>
      <GlobalStyle />
      <SEO title={title} />
      <CrystallizeLayout right={Aside}>
        <Header headerItems={headerItems} />
        <main>{children}</main>
        <Footer headerItems={headerItems} />
      </CrystallizeLayout>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
