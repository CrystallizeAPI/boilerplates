import React from "react"

import Layout from "components/layout"

import Search from "../page-templates/search"

export default (props) => (
  <Layout title="Search">
    <Search {...props} />
  </Layout>
)
