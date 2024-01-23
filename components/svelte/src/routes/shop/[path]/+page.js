import { graphql } from "$houdini";

export const _houdini_load = graphql(`
    query ProductData($path: String!, $language: String!) {
        product: catalogue(path: $path, language: $language) {
            id
            name
            url: path
            topics {
                name
            }
            ... on Product {
                defaultVariant {
                    price
                    stock
                    firstImage {
                        url
                    }
                }
            }
            brief: component(id: "brief") {
                content {
                    ... on RichTextContent {
                        html
                    }
                }
            }
            nutrition: component(id: "nutrition") {
                content {
                    ... on PropertiesTableContent {
                        sections {
                            title
                            properties {
                                key
                                value
                            }
                        }
                    }
                }
            }
            body: component(id: "body") {
                content {
                    ... on ParagraphCollectionContent {
                        paragraphs {
                            title {
                                text
                            }
                            body {
                                html
                            }
                            images {
                                url
                                height
                                height
                            }
                        }
                    }
                }
            }
        }
    }
`);

/* @type { import('./$houdini').ProductDataVariables } */
export const _ProductDataVariables = (event) => {
    return {
        path: event.url.pathname,
        language: "en",
    };
};
