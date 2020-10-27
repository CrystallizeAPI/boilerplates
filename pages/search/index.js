import React, { useEffect, useRef, useState, useReducer } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Layout from "components/layout";
import { simplyFetchFromSearchGraph } from "lib/graphql";
import { urlToSpec, SEARCH_QUERY } from "lib/search";
// import { Outer, Header, H1 } from "ui";
// import ShapeComponents from 'components/shape/components';
// import query from "./query";

import reducer from "./reducer";
import Spec from "./spec";
import Results from "./results";
import Pagination from "./pagination";

// export async function getStaticProps() {
//   const data = await fetcher(query);
//   return { props: { data }, revalidate: 1 };
// }

const Outer = styled.div`
  min-height: 100vh;
  background: #fff;
`;

export async function getData({ language, searchSpec }) {
  const [
    {
      data: { search },
    },
    { data: { searchPage } = {} },
  ] = await Promise.all([
    simplyFetchFromSearchGraph({
      query: SEARCH_QUERY,
      variables: searchSpec,
    }),
  ]);

  return {
    searchData: search,
    catalogueData: searchPage || null,
    language,
    searchSpec,
  };
}

export default function SearchPage({ searchData, searchSpec, catalogueData }) {
  const { isFallback, query, asPath } = useRouter();
  console.log("isFallback", isFallback);

  const firstLoad = useRef();
  const [data, setData] = useState(searchData);
  const [spec, dispatch] = useReducer(reducer, searchSpec);

  // Initial data changed
  useEffect(() => {
    setData(searchData);
  }, [searchData]);

  // Search specifications changed
  useEffect(() => {
    async function load() {
      const { data } = await simplyFetchFromSearchGraph({
        query: SEARCH_QUERY,
        variables: urlToSpec({ asPath, query }),
      });
      setData(data.search);
    }

    if (!isFallback) {
      if (!firstLoad.current) {
        firstLoad.current = true;
        return;
      }

      load();
    }
  }, [isFallback, query, asPath]);

  function navigate({ direction }) {
    if (direction === "nextPage") {
      dispatch({ action: "navigate", after: data.pageInfo.endCursor });
    } else {
      dispatch({ action: "navigate", before: data.pageInfo.startCursor });
    }
  }

  // We're waiting for the search result to come in
  if (!data) {
    return (
      <Layout>
        <div>
          <div style={{ background: "#eee", height: 100, padding: 50 }}>
            Skeleton...?
          </div>
        </div>
      </Layout>
    );
  }
  console.log("data", data);
  const productEdges = data.edges.filter((e) => e.node.type === "product");
  const documentEdges = data.edges.filter((e) => e.node.type === "document");
  return (
    <Layout>
      <Outer>
        {!!productEdges && (
          <>
            {/* <Spec {...data} spec={spec} dispatch={dispatch} /> */}
            <Pagination {...data} navigate={navigate} />
            <Results {...data} spec={spec} edges={productEdges} />
            <Pagination {...data} navigate={navigate} />
          </>
        )}
      </Outer>
    </Layout>
  );
}
