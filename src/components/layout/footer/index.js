import React from "react"
import Link from "components/link"

import LogoCrystallize from "ui/icons/logo-crystallize"
import { useT } from "lib/i18n"

import { Outer, Logo, NavList, Powered } from "./styles"
import ShopLogo from "images/shop-logo.svg"

export default function Footer({ headerItems }) {
  const t = useT()

  return (
    <Outer>
      <Link to="/">
        <Logo>
          <img src={ShopLogo} alt="" width="56" height="84" />
        </Logo>
      </Link>
      <NavList>
        <h5>{t("layout.menu")}</h5>
        {headerItems
          ?.filter((i) => !i.name.startsWith("_"))
          .map((headerItem) => {
            const { name, path } = headerItem

            return (
              <li key={path}>
                <Link to={path}>{name}</Link>
              </li>
            )
          })}
      </NavList>
      <Powered>
        <p>{t("layout.ecomBy")}</p>
        <a href="https://crystallize.com" aria-label="crystallize.com">
          <LogoCrystallize size={10} />
        </a>
      </Powered>
    </Outer>
  )
}
