import styled from "styled-components"
import { Image } from "@crystallize/react-image"

import Link from "components/link"
import { colors, responsive } from "ui"

export const ProductOuter = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: stretch;
  justify-content: center;
  border-radius: 12px;
  position: relative;
  &:after {
    content: "";
    background: ${colors.frostbite};
    width: 80%;
    height: 5%;
    position: absolute;
    left: 10%;
    bottom: -1px;
    filter: blur(9px);
    opacity: 0.15;
    transition: opacity 0.2s ease-in-out, filter 0.2s ease-in-out;
  }
  &:hover:after {
    filter: blur(4px);
    opacity: 0.35;
  }
`

export const ProductInner = styled.span`
  text-decoration: none;
  width: 100%;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  height: 100%;
  font-weight: 600;
  color: ${colors.darkText};
  text-align: center;
  align-items: stretch;
  justify-content: stretch;
  background: #fff;
  border-radius: 12px;
  &:hover {
    background: #fefefe;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  flex-grow: 1;
`

export const Img = styled(Image)`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  > img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`
export const Outer = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: stretch;
  justify-content: center;
  border-radius: 12px;
  position: relative;
  grid-column: span 2;
`

export const Inner = styled.span`
  text-decoration: none;
  width: 100%;
  position: relative;
  z-index: 10;
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
  font-weight: 600;
  color: ${colors.darkText};
  border: 2px solid #dfdfdf;
  border-radius: 12px;
  overflow: hidden;
  &:hover {
    border: 2px solid #fff;
    background: #fff;
  }
`

export const MicroFormat = styled.div`
  text-align: left;
  width: 60%;
  padding: 1em;
  h3 {
    font-size: 2em;
    color: ${colors.frostbite};
    font-family: "Roboto Slab", "Roboto", "sans-serif";
  }
`
export const ContentLine = styled.div`
  display: flex;
  padding: 15px;
  margin: 8px;
  flex-direction: ${(p) => (p.right ? "row-reverse" : "row")};
  justify-content: space-between;
  align-items: stretch;
  text-overflow: ellipsis;

  > div {
    flex: 1;
  }

  ${responsive.xs} {
    margin: 0;
  }
`

export const Price = styled.span`
  color: ${colors.price};
`
