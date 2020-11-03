import styled from "styled-components"
import Image from "@crystallize/react-image"

import { responsive } from "ui"

export const Result = styled.div``

export const Wrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;

  ${responsive.mdAndMore} {
    display: grid;
    padding: 0 70px;
    grid-gap: 40px;
    grid-template-columns: 300px 1fr 1fr 1fr;
    grid-template-areas:
      "spec spec spec spec "
      "facets products products products ";
  }
`
export const Header = styled.header`
  ${responsive.mdAndMore} {
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-gap: 25px;
    align-items: center;
    grid-area: spec;
  }
`

export const SearchFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  margin: 15px 0;

  h3 {
    font-weight: 600;
    color: #000;
  }
`

export const Select = styled.select`
  padding: 10px 0;
  outline: none;
  border: none;
  width: 160px;
  background: transparent;
`

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  padding: 0 15px;

  ${responsive.mdAndMore} {
    padding: 0;
  }
`
export const Img = styled(Image)`
  width: 100%;
  height: 100%;
  overflow: hidden;

  > img {
    display: block;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`

export const Price = styled.span`
  color: var(--color-price);
  font-weight: bold;
  padding-bottom: 5px;
`

export const Text = styled.div`
  z-index: 2;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  left: 0;
  width: 100%;
  padding: 1em;
  color: var(--color-text-main);

  h3 {
    font-size: 1.5rem;
    text-transform: uppercase;
    color: inherit;
    font-family: "Roboto", sans-serif;
    margin: 0;
  }
`

export const ListWrapper = styled.div`
  grid-area: products;
`

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
`

export const ListItem = styled.li`
  background: var(--color-box-background);
  margin: 0;

  a {
    padding: 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    img {
      width: 100%;
      height: 250px;
    }
  }
`

export const FacetsOuter = styled.div`
  grid-area: facets;
  max-width: 300px;
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
