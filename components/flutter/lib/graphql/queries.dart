/// All crystallize API QUERIES
///

String getCatalogues = """
  query GetCatalogues {
    catalogue(url: "/", tenantID: "demo") {
      name
      id
      link
      type_name
      type_identifier
      content_fields
  
      breadcrumbs{
        name
        breadcrumb
      }
  
      children {
        link
        name
      }
    }
  }
""".replaceAll('\n', ' ');
