import styled from "styled-components"
import is from "styled-is"

import { responsive, Button } from "ui"

export const FacetsMobileButtonWrap = styled.div`
  padding: 0 15px;
  margin: 15px 0;
  display: flex;
  justify-content: flex-end;
`

export const FacetsMobileButton = styled(Button)`
  ${responsive.mdAndMore} {
    display: none;
  }
`

export const FacetsMobileShowResults = styled.div`
  padding: 15px;
  position: absolute;
  bottom: 0;
  right: 0;

  ${responsive.mdAndMore} {
    display: none;
  }
`

export const FacetsWrapper = styled.div`
  display: none;

  ${responsive.smAndLess} {
    ${is("$show")`
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100%;
      z-index: 99;
      overflow-x: auto;
      background: #fff;
      padding: 100px 15px;
    `};
  }

  ${responsive.mdAndMore} {
    grid-area: facets;
    max-width: 300px;
    display: block;
  }
`

export const Facet = styled.div`
  border-top: 1px solid #dfdfdf;
  padding-top: 35px;

  &:not(:last-child) {
    margin-bottom: 35px;
  }
`

export const FacetTitle = styled.h4`
  margin: 0 0 15px;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  color: #000;
`

export const PriceWrapper = styled.div``

export const Values = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  grid-template-columns: 1fr 1fr;

  input:first-child {
    border-right-color: transparent;
  }
`

export const Input = styled.input`
  background: white;
  border: 1px solid #000;
  padding: 8px 15px;
  flex: 0 1 auto;
  width: 100%;
`

export const RangeWrap = styled.div`
  margin: 0 10px;
  .rc-slider-track {
    background: #000;
  }
  .rc-slider-handle {
    border-color: #000;
    &.rc-slider-handle-dragging {
      border-color: #000;
      box-shadow: 0 0 0 5px #000;
    }
  }
`

export const SingleFacetValueWrapper = styled.div`
  padding: 4px 0;
  input {
    margin-right: 5px;
    border: 1px solid #000;
    border-radius: 0;
  }
  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    color: #000;
  }
`
export const Count = styled.span`
  font-weight: 600;
`
