import React, { useReducer, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import produce from "immer";

import { simplyFetchFromSearchGraph } from "lib/graphql";
import { SEARCH_QUERY } from "lib/search";
import { useOnOutsideClick } from "components/outside-click";
import Link from "next/link";

import {
  Outer,
  SearchWrapper,
  SearchLabel,
  BodyOverlay,
  CloseBtn,
  Result,
  Input,
  InputGroup,
  InputButton,
} from "./styles";

const initialState = {
  searchTerm: "",
  status: "idle",
  isOpen: false,
  searchResult: {
    totalCount: 0,
    edges: [],
  },
};

const searchReducer = produce(function reducer(draft, { action, ...rest }) {
  switch (action) {
    case "setSearchTerm": {
      const { value } = rest;
      if (value.length > 0) {
        draft.status = "searching";
      }

      draft.searchTerm = value;
      break;
    }
    case "setResult": {
      draft.searchResult.edges = rest.edges;
      draft.searchResult.totalCount = rest.aggregations.totalResults;
      draft.status = "got-results";
      break;
    }
    case "focus": {
      draft.isOpen = true;
      break;
    }
    case "blur": {
      draft.isOpen = false;
      break;
    }
    default: {
      throw new Error(`Action ${action} not supported`);
    }
  }
});

export default function Search({ children }) {
  const router = useRouter();
  const outerRef = useRef();
  const searchInput = useRef();

  const [{ searchTerm, status, searchResult, isOpen }, dispatch] = useReducer(
    searchReducer,
    initialState
  );

  const onClickSearchBtn = () => {
    dispatch({ action: "focus" });
    searchInput.current.focus();
  };
  useOnOutsideClick({
    element: outerRef.current,
    onOutsideClick: () => dispatch({ action: "blur" }),
  });

  // Initiate searching
  useEffect(() => {
    async function doSearch() {
      const response = await simplyFetchFromSearchGraph({
        query: SEARCH_QUERY,
        variables: {
          filter: { searchTerm },
        },
      });

      dispatch({ action: "setResult", ...response.data.search });
    }

    if (status === "searching") {
      doSearch();
    }
  }, [searchTerm, status]);

  function onSubmit(e) {
    e.preventDefault();

    router.push({
      pathname: "/search",
      query: {
        filter: JSON.stringify({
          searchTerm,
          productVariants: { isDefault: true },
        }),
      },
    });

    dispatch({ action: "blur" });
  }

  return (
    <>
      <div onClick={() => onClickSearchBtn()}>{children}</div>
      <SearchWrapper isOpen={isOpen}>
        <Outer ref={outerRef}>
          <SearchLabel>Search for something</SearchLabel>
          <InputGroup as="form" method="get" onSubmit={onSubmit}>
            <Input
              ref={searchInput}
              type="search"
              value={searchTerm}
              onFocus={() => dispatch({ action: "focus" })}
              onChange={(e) =>
                dispatch({ action: "setSearchTerm", value: e.target.value })
              }
              placeholder="search"
            />
            {status === "searching" && "..."}
            <InputButton>➔</InputButton>
          </InputGroup>
          {status !== "idle" && isOpen && searchTerm !== "" && (
            <Result>
              <h3>{searchResult.totalCount} suggestions</h3>
              <ul style={{ height: 40 * (searchResult.edges.length + 1) }}>
                {searchResult.edges.map(({ cursor, node }) => (
                  <li key={cursor}>
                    <Link
                      as={node.path}
                      onClick={() => dispatch({ action: "blue" })}
                      href="/[...catalogue]"
                    >
                      <a>{node.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </Result>
          )}
        </Outer>
        <CloseBtn onClick={() => dispatch({ action: "blur" })} />
      </SearchWrapper>
      {!!isOpen && <BodyOverlay />}
    </>
  );
}
