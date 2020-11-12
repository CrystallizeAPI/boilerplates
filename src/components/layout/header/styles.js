import styled from "styled-components"
import is from "styled-is"

import { responsive } from "ui"

export const Outer = styled.header`
  text-align: center;
  padding: 20px 75px;
  max-width: 1600px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto 0;

  ${responsive.smAndLess} {
    padding: 10px 90px 10px 20px;
    justify-content: space-between;
    position: relative;
  }
`

export const Logo = styled.a`
  height: 84px;
  display: block;
  object-fit: contain;

  position: relative;
  z-index: 99;
  img,
  svg {
    height: 100%;
  }
`

export const NavAndActions = styled.div`
  ${responsive.mdPlus} {
    margin-left: 30px;
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
`

export const Nav = styled.nav`
  display: flex;
  margin: 10px 0 0 15px;
  padding-left: 15px;
  width: 100%;
  ${responsive.mdPlus} {
    justify-content: center;
  }
  ${responsive.smAndLess} {
    display: none;
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
    min-height: 100vh;
    height: 100%;
    overflow-x: auto;
    scroll-behavior: smooth;
    border: none;
    background: #fafafa;
    margin: 0;
    padding: 2em;
    font-size: 1.5rem;

    ${is("open")`
      display: block;
    `};
  }
`

export const NavList = styled.ul`
  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 0;

  /* Make space for logout button */
  ${responsive.smAndLess} {
    margin-top: 30px;
  }
`

export const NavListItem = styled.li`
  margin: 0;
  padding: 0;
  display: inline-block;
  margin: 0 5px;

  > a {
    display: inline-block;
    padding: 10px 10px;
    transition: all 100ms;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    &:hover {
      text-decoration: underline;
    }
  }

  ${responsive.smAndLess} {
    display: block;
  }
`
