import React from "react"
import styled from "styled-components"

import { useLocale, useLocales } from "lib/i18n"

const Outer = styled.div`
  display: inline-flex;
  margin: 0 20px;
`

const SelectAsText = styled.div`
  position: relative;
  white-space: nowrap;

  select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 1rem;
    opacity: 0;
    cursor: pointer;
  }
`

export default function LocaleSwitcher() {
  const locale = useLocale()
  const locales = useLocales()

  function onBlur(e) {
    window.location = `/${e.target.value}`
  }

  if (locales.length <= 1) {
    return null
  }

  return (
    <Outer>
      <SelectAsText>
        <span>{locale.displayName}</span>
        <select onBlur={onBlur} defaultValue={locale.urlPrefix}>
          {locales.map((l) => (
            <option value={l.urlPrefix} key={l.urlPrefix}>
              {l.displayName}
            </option>
          ))}
        </select>
      </SelectAsText>
    </Outer>
  )
}
