import React from "react"

import { Button } from "ui"

import { PaginationWrapper } from "./styles"

function Pagination({ navigate, pageInfo }) {
  const { hasPreviousPage, hasNextPage } = pageInfo

  if (!hasPreviousPage && !hasNextPage) {
    return null
  }

  function handleButtonClick(event) {
    event.stopPropagation()

    navigate(event.currentTarget.name)
  }

  return (
    <PaginationWrapper>
      <Button
        disabled={!hasPreviousPage}
        name="prevPage"
        onClick={handleButtonClick}
        type="button"
      >
        ←
      </Button>
      <Button
        disabled={!hasNextPage}
        name="nextPage"
        onClick={handleButtonClick}
        type="button"
      >
        →
      </Button>
    </PaginationWrapper>
  )
}

export default Pagination
