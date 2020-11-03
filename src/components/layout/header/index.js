import React, { useState } from "react"

import { IconLogo } from "ui"
import Link from "components/link"

import { Outer, Nav, Logo, NavList, NavListItem, Actions } from "./styles"
import BurgerButton from "./burger-button"
import LocaleSwitcher from "./locale-switcher"
import Search from "./search"

export default function Header({ headerItems }) {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <Outer>
      <Link to="/">
        <Logo>
          <IconLogo />
        </Logo>
      </Link>
      <Nav open={navOpen}>
        <NavList>
          {headerItems
            ?.filter((i) => !i.name.startsWith("_"))
            .map((headerItem) => {
              const { name, path } = headerItem

              return (
                <NavListItem key={path}>
                  <Link to={path}>{name}</Link>
                </NavListItem>
              )
            })}
        </NavList>
      </Nav>
      <Actions>
        <LocaleSwitcher />
        <Search />
      </Actions>
      <BurgerButton active={navOpen} onClick={() => setNavOpen(!navOpen)} />
    </Outer>
  )
}
