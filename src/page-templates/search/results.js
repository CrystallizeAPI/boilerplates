import React from "react"
import { Link } from "gatsby"

import { H3 } from "ui"
import { useT, useLocale } from "lib/i18n"

import { Img, Price, List, ListItem, Text, ListWrapper } from "./styles"
import Pagination from "./pagination"

function Results({ edges, pageInfo, navigate }) {
  const t = useT()
  const locale = useLocale()

  return (
    <ListWrapper>
      <List>
        {edges?.length ? (
          edges.map(({ cursor, node }) => {
            const { matchingVariant, path, name, type } = node
            const { images, priceVariants } = matchingVariant ?? {}
            const { price, currency } = priceVariants?.find(
              (pv) => pv.identifier === locale.priceVariant
            ) || {
              price: matchingVariant?.price || "n/a",
              currency: "eur",
            }

            return (
              <ListItem key={cursor}>
                <Link to={path}>
                  {images?.[0] && <Img {...images?.[0]} alt="" sizes="250px" />}
                  <Text>
                    {type === "product" && (
                      <Price>
                        {t("common.price", {
                          value: price,
                          currency,
                        })}
                      </Price>
                    )}
                    <H3>{name}</H3>
                  </Text>
                </Link>
              </ListItem>
            )
          })
        ) : (
          <div style={{ padding: 15 }}>No results for this search</div>
        )}
      </List>
      <Pagination pageInfo={pageInfo} navigate={navigate} />
    </ListWrapper>
  )
}

export default Results
