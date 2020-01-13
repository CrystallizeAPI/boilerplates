import styled from "styled-components"

import { responsive } from "ui"

export const Outer = styled.header`
  text-align: center;
  padding: 10px 75px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 1500px;
  margin: 0 auto 50px;

  ${responsive.xs} {
    flex-direction: column;
  }
`

export const Logo = styled.div`
  height: 84px;
  display: block;
  object-fit: contain;
  img,
  svg {
    height: 100%;
  }
`

export const Nav = styled.nav`
  display: flex;
  margin: 10px 0 0 15px;
  width: 100%;
  border-left: 1px solid #dfdfdf;
  padding-left: 15px;
`

export const NavList = styled.ul`
  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 0;
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

    &:hover {
      text-decoration: underline;
    }
  }
`
