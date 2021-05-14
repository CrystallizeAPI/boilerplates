import React, { useState } from "react"

import Link from "components/link"
import ShopLogo from "images/shop-logo.svg"
import IconUser from "ui/icons/user"

import { Outer, Nav, Logo, NavList, NavListItem, Btn, IconBar } from "./styles"
import BurgerButton from "./burger-button"
import BasketButton from "./basket-button"
import LocaleSwitcher from "./locale-switcher"
import Search from "./search"

export default function Header({ headerItems }) {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <Outer>
      <Logo as={Link} to="/">
        <img src={ShopLogo} alt="" width="207" height="35" />
      </Logo>
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
      <IconBar>
        <LocaleSwitcher />
        <Btn as={Link} to="/account" aria-label="User area">
          <IconUser />
        </Btn>
        <Search />
        <BasketButton />
      </IconBar>
      <BurgerButton active={navOpen} onClick={() => setNavOpen(!navOpen)} />
    </Outer>
  )
}
