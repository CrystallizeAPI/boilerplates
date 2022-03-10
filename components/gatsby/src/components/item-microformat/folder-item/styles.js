import styled from "styled-components"
import { Image } from "@crystallize/react-image"
import Link from "components/link"

import { responsive } from "ui"

export const Outer = styled(Link)`
  display: block;
  height: 100%;
  color: var(--color-main-background);
  position: relative;
  padding: 1em;
  background: var(--color-box-background);
  grid-column-end: span 4;
  ${responsive.xs} {
    margin-bottom: 15px;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  z-index: 1;
  overflow: hidden;
  height: 100%;
`

export const Img = styled(Image)`
  figure {
    height: 100%;
  }
  img {
    width: 100%;
    object-fit: cover;
  }

  > img {
    display: block;
    object-fit: contain;
    object-position: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 12px;
  }
`

export const Text = styled.div`
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1em;

  h3 {
    position: absolute;
    bottom: 4rem;
    width: 100%;
    left: 0%;
    font-size: 1.4em;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    color: black;
  }
`

export const Price = styled.span`
  color: inherit;
  font-weight: bold;
`
