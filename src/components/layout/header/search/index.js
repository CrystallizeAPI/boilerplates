import React, { useReducer, useEffect, useRef } from "react"
import produce from "immer"
import { navigate, Link } from "gatsby"

import { useT } from "lib/i18n"
import { doSearch } from "lib/api"
import { useOnOutsideClick } from "components/outside-click"
import { defaultSpec, SEARCH_QUERY } from "lib/search"

import { Input, InputGroup, InputButton, InputSpinner } from "ui"
import {
  Outer,
  SearchWrapper,
  SearchLabel,
  BodyOverlay,
  CloseBtn,
  Result,
  Btn,
} from "./styles"

export const BLUR = "BLUR"
export const FOCUS = "FOCUS"
export const SET_RESULT = "SET_RESULT"
export const SET_SEARCH_TERM = "SET_SEARCH_TERM"

const initialState = {
  ...defaultSpec,
  status: "idle",
  isOpen: false,
  searchResult: {
    totalCount: 0,
    items: [],
  },
}

const searchReducer = produce(function reducer(draft, { action, ...rest }) {
  switch (action) {
    case SET_SEARCH_TERM: {
      const { value } = rest

      if (value.length > 0) {
        draft.status = "searching"
      }

      draft.filter.searchTerm = value
      break
    }

    case SET_RESULT: {
      draft.searchResult.items =
        rest.edges?.map(({ node }) => ({ ...node })) ?? []
      draft.searchResult.totalCount = rest.aggregations.totalResults
      draft.status = "got-results"
      break
    }

    case FOCUS: {
      draft.isOpen = true
      break
    }

    case BLUR: {
      draft.isOpen = false
      break
    }

    default: {
      throw new Error(`Action ${action} not supported`)
    }
  }
})

export default function Search() {
  const t = useT()
  const outerRef = useRef()
  const searchInput = useRef()

  const [{ status, searchResult, isOpen, ...spec }, dispatch] = useReducer(
    searchReducer,
    initialState
  )

  const onClickSearchBtn = () => {
    dispatch({ action: FOCUS })
    searchInput.current.focus()
  }
  useOnOutsideClick({
    element: outerRef.current,
    onOutsideClick: () => dispatch({ action: BLUR }),
  })

  // Initiate searching
  useEffect(() => {
    async function search() {
      try {
        const response = await doSearch({
          query: SEARCH_QUERY,
          variables: {
            ...spec,
            aggregationsFilter: spec.filter,
          },
        })

        if (response?.data?.search) {
          dispatch({ action: SET_RESULT, ...response.data.search })
        }
      } catch (error) {
        console.error("Something wrong with the search service", error)
      }
    }

    if (status === "searching") {
      search()
    }
  }, [spec, status])

  function onSubmit(e) {
    e.preventDefault()

    navigate(`/search?searchTerm=${spec.filter.searchTerm || ""}`)

    dispatch({ action: BLUR })
  }

  return (
    <>
      <Btn type="button" onClick={() => onClickSearchBtn()}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 22C17.9706 22 22 17.9706 22 13C22 8.02944 17.9706 4 13 4C8.02944 4 4 8.02944 4 13C4 17.9706 8.02944 22 13 22ZM13 24C19.0751 24 24 19.0751 24 13C24 6.92487 19.0751 2 13 2C6.92487 2 2 6.92487 2 13C2 19.0751 6.92487 24 13 24Z"
            fill="#4C505B"
            stroke="none"
            strokeWidth="0.2"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.0872 27.804L20.1521 21.3869L21.5104 19.9189L28.4455 26.336L27.0872 27.804Z"
            fill="#4C505B"
            strokeWidth="0.2"
          />
        </svg>
      </Btn>
      <SearchWrapper isOpen={isOpen}>
        <Outer ref={outerRef}>
          <SearchLabel>Search for something</SearchLabel>
          <InputGroup as="form" onSubmit={onSubmit}>
            <Input
              ref={searchInput}
              type="search"
              value={spec.filter.searchTerm}
              onFocus={() => dispatch({ action: FOCUS })}
              onChange={(e) =>
                dispatch({ action: SET_SEARCH_TERM, value: e.target.value })
              }
              placeholder={t("layout.searchPlaceholder")}
            />
            {status === "searching" && <InputSpinner />}
            <InputButton>➔</InputButton>
          </InputGroup>
          {status !== "idle" && isOpen && spec.filter.searchTerm !== "" && (
            <Result>
              <h3>{searchResult.totalCount} suggestions</h3>
              <ul style={{ height: 40 * (searchResult.items.length + 1) }}>
                {searchResult.items.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => dispatch({ action: BLUR })}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Result>
          )}
        </Outer>
        <CloseBtn onClick={() => dispatch({ action: BLUR })} />
      </SearchWrapper>
      {!!isOpen && <BodyOverlay />}
    </>
  )
}
