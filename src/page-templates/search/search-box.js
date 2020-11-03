import React, { useState } from "react"
import styled from "styled-components"

import { Input, InputGroup, InputButton, responsive } from "ui"
import { useT } from "lib/i18n"

const Outer = styled.div`
  padding: 0 15px;

  ${responsive.mdAndMore} {
    padding: 0;
  }
`

function Search({ searchTerm, onChange }) {
  const [searchString, setSearchString] = useState(searchTerm ?? "")
  const t = useT()

  const handleSubmit = (event) => {
    event.preventDefault()
    onChange(searchString)
  }

  const handleSearchTerm = (event) => {
    setSearchString(event.target.value)
  }

  return (
    <Outer>
      <InputGroup
        css={`
          border-radius: 0;
        `}
        as="form"
        onSubmit={handleSubmit}
      >
        <Input
          type="search"
          value={searchString}
          onChange={handleSearchTerm}
          placeholder={t("layout.searchPlaceholder")}
          css={`
            padding-left: 20px;
          `}
        />
        <InputButton
          css={`
            border-radius: 0;
          `}
        >
          ➔
        </InputButton>
      </InputGroup>
    </Outer>
  )
}

export default Search
