import React, { useReducer, useEffect, useRef } from "react";
import produce from "immer";
import SearchItems from "./items";
import { simplyFetchFromSearchGraph } from "lib/graphql";
import { SEARCH_QUERY } from "lib/search";
import { useOnOutsideClick } from "components/outside-click";

import {
  Outer,
  SearchWrapper,
  SearchLabel,
  BodyOverlay,
  CloseBtn,
  Result,
  Input,
  InputGroup,
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
    onOutsideClick: () => {
      if (isOpen) {
        dispatch({ action: "blur" });
      }
    },
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

  const redirecting = () => {
    dispatch({ action: "setSearchTerm", value: "" });
    dispatch({ action: "blur" });
  };
  return (
    <>
      <div onClick={() => onClickSearchBtn()}>{children}</div>
      <SearchWrapper isOpen={isOpen}>
        <Outer ref={outerRef}>
          <SearchLabel>Search for something</SearchLabel>
          <InputGroup as="form" method="get">
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
            {/* <InputButton>{status === "searching" ? "..." : "➔"}</InputButton> */}
          </InputGroup>
          {status !== "idle" && isOpen && searchTerm !== "" && (
            <Result>
              <h3>{searchResult.totalCount} suggestions</h3>
              <ul style={{ height: 55 * (searchResult.edges.length + 1) }}>
                {searchResult.edges.map(({ cursor, node }) => (
                  <SearchItems
                    key={cursor}
                    node={node}
                    redirecting={redirecting}
                  />
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
