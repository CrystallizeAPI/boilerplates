import React, { useState } from "react"
import { Link } from "gatsby"

import { IconLogo } from "ui"

import { Outer, Nav, Logo, NavList, NavListItem } from "./styles"
import BurgerButton from "./burger-button"

const Header = ({ headerItems, language }) => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <Outer>
      <Link to={`/${language}`}>
        <Logo>
          <IconLogo />
        </Logo>
      </Link>
      <Nav open={navOpen}>
        <NavList>
          {headerItems
            ?.filter(i => !i.name.startsWith("_"))
            .map(headerItem => {
              const { name, language, path } = headerItem

              return (
                <NavListItem key={path}>
                  <Link to={`/${language}${path}`}>{name}</Link>
                </NavListItem>
              )
            })}
        </NavList>
      </Nav>
      <BurgerButton active={navOpen} onClick={() => setNavOpen(!navOpen)} />
    </Outer>
  )
}

export default Header
