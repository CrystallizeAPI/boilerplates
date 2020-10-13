import React from 'react'
import styled from 'styled-components'
import Logo from 'ui/logo'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

const navHeight = '130px'
const tints = {
  white: '#fff',
  black: '#000',
  blue: 'blue',
}
const Header = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 25px;
  z-index: 100;
  height: ${navHeight};
  ${({ theme }) => theme.responsive.smPlus} {
    padding: 0px 100px;
  }
`
const LogoWrapper = styled.div`
  position: relative;
  height: 50px;
  overflow: hidden;
  cursor: pointer;
  svg {
    width: 100%;
  }
`
const Main = styled.main``
const Footer = styled.footer``
const Navigation = styled.nav`
  display: flex;
  align-items: center;
  color: ${(p) => p.color};
  /* justify-content: stretch; */
`
const NavLink = styled.span`
  display: flex;
  font-weight: 600;
  cursor: pointer;
  font-size: 18px;
  padding: 0 30px;
  align-items: center;
  height: ${navHeight};
  ${(p) =>
    p.active &&
    `
    font-weight: 900;
  `}
`

const Layout = ({
  tint = 'black',
  title,
  description = 'Great stories happen to those who can tell them',
  children,
}) => {
  const router = useRouter()
  const activeNav = `/${router?.asPath?.split('/')?.[1]}`
  return (
    <>
      <Head>
        <title>{!!title ? `${title} | Voyage` : 'Voyage'}</title>
        <meta name="description" content={description} />
      </Head>
      <Main>
        <Header>
          <Link to="/" href="/">
            <LogoWrapper>
              <Logo size="200" color={tints[tint]} />
            </LogoWrapper>
          </Link>
          <Navigation color={tints[tint]}>
            <Link to="/stories" href="/stories">
              <NavLink active={activeNav === '/stories'}>Stories</NavLink>
            </Link>
            <Link to="/shop" href="/shop">
              <NavLink active={activeNav === '/shop'}>Shop</NavLink>
            </Link>
          </Navigation>
        </Header>
        {children}
        <Footer />
      </Main>
    </>
  )
}

export default Layout
