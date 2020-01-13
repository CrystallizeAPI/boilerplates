import styled from "styled-components"

import { colors, responsive } from "ui"

export const Loader = styled.div`
  text-align: center;
  margin: 50px;
  font-size: 2rem;
`

export const Sections = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${responsive.smAndLess} {
    display: block;
  }
`

export const RelatedTopics = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  h2 {
    font-family: "Roboto Slab", sans-serif;
    padding-left: 50px;
  }
`

export const TopicMap = styled.div`
  padding-left: 50px;
  position: relative;
  margin-top: 30px;
`

export const TopicTitle = styled.h3`
  font-size: 16px;
  opacity: 0.6;
  top: 0;
  height: 40px;
  left: 40px;
  position: absolute;
  transform-origin: top left;
  transform: rotate(90deg);
`
export const Media = styled.div`
  flex: 0 0 50%;
  position: relative;
  padding-top: 60%;

  ${responsive.mdAndLess} {
    flex-basis: 50%;
  }

  &:before {
    content: "";
    width: 80%;
    height: 20px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const MediaInner = styled.div`
  width: 100%;
  max-width: 550px;
  height: 100%;
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  padding: 2rem;

  img {
    position: relative;
    object-fit: contain;
    z-index: 10;
    top: 0;
    width: 100%;
    height: 100%;
  }
`

export const Info = styled.div`
  flex: 1 1 auto;
  margin: 0 50px 0 50px;

  ${responsive.smAndLess} {
    margin-left: 0;
    margin-top: 50px;
  }
`

export const Summary = styled.div`
  color: ${colors.darkText};
  font-size: 18px;
  line-height: 1.4;
  margin-bottom: 15px;
`

export const Description = styled.div`
  color: ${colors.darkText};
  font-size: 18px;
  max-width: 700px;
  margin: 0 auto 15px;
  line-height: 1.4;

  img {
    max-height: 300px;
    margin: 1rem 0;
  }

  h2:empty {
    display: none;
  }

  ul {
    margin: 1rem 0;
    padding-left: 1.2rem;

    li {
      margin-bottom: 0.5rem;
    }
  }
`

export const ProductFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #dfdfdf;
  padding: 15px 0;
  justify-content: space-between;
  align-items: center;

  ${responsive.xs} {
    button {
      flex-grow: 1;
      margin: 1rem 0;
    }
  }
`

export const Price = styled.div`
  text-align: center;
  color: ${colors.darkText};
  font-size: 30px;
  margin-right: 20px;

  strong {
    display: inline-block;
    margin-left: 5px;
  }

  ${responsive.xs} {
    flex-grow: 1;
  }
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  ${responsive.sm} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${responsive.md} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${responsive.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
`
