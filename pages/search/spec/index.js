import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { specToQuery, urlToSpec } from "lib/search";
// import { useT } from 'lib/i18n';

import { Outer, Inner, InputFooter, TotalResults } from "./styles";
import SearchTerm from "./search-term";
import OrderBy from "./order-by";

export default function SearchSpec({ spec, dispatch, aggregations }) {
  const router = useRouter();
  // const t = useT();

  useEffect(() => {
    const asPath = router.asPath.split("?")[0];
    const query = specToQuery(spec);
    const existingQuery = specToQuery(
      urlToSpec({ query: router.query, asPath })
    );

    if (JSON.stringify(query) === JSON.stringify(existingQuery)) {
      // No change to query
      return;
    }

    router.replace(
      {
        as: asPath,
        pathname: asPath,
        query,
      },
      undefined,
      { shallow: true }
    );
  }, [spec, router]);

  return (
    <Outer>
      <Inner>
        <SearchTerm
          searchTerm={spec.filter.searchTerm}
          onChange={(searchTerm) =>
            dispatch({ action: "setSearchTerm", searchTerm })
          }
        />
        <InputFooter>
          <TotalResults>Results</TotalResults>
          <OrderBy
            orderBy={spec.orderBy}
            onChange={(orderBy) => dispatch({ action: "setOrderBy", orderBy })}
          />
        </InputFooter>
      </Inner>
    </Outer>
  );
}
