import React from "react";
import styled from "styled-components";
import Logo from "ui/logo";
import Link from "next/link";
import { useRouter } from "next/router";

const navHeight = "130px";
const tints = {
  white: "#fff",
  black: "#000",
  blue: "blue",
};
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
`;
const LogoWrapper = styled.div`
  position: relative;
  height: 50px;
  overflow: hidden;
  cursor: pointer;
  svg {
    width: 130px;
    height: 130px;
    margin-top: 10px;
    ${({ theme }) => theme.responsive.mdPlus} {
      margin-top: 0;
      width: 100%;
      height: 200px;
    }
  }
`;
const Main = styled.main``;
const Footer = styled.footer`
  background: #fff;
  position: relative;
  z-index: 1;
  padding: 100px 25px 100px;
  ${({ theme }) => theme.responsive.smPlus} {
    padding: 100px;
  }
  a {
    font-size: 14px;
    color: #000;
    text-decoration: none;
    display: flex;
    align-items: center;
    svg {
      margin-right: 8px;
    }
  }
`;
const Navigation = styled.nav`
  display: flex;
  align-items: center;
  color: ${(p) => p.color};
  /* justify-content: stretch; */
`;
const NavLink = styled.span`
  display: flex;
  font-weight: 600;
  cursor: pointer;
  font-size: 15px;
  padding: 0 15px;
  align-items: center;
  height: ${navHeight};
  ${(p) =>
    p.active &&
    `
    font-weight: 900;
  `}

  ${({ theme }) => theme.responsive.mdPlus} {
    font-size: 18px;
    padding: 0 30px;
  }
`;
const Layout = ({ tint = "black", children, hideFooter = false }) => {
  const router = useRouter();
  const activeNav = `/${router?.asPath?.split("/")?.[1]}`;
  return (
    <>
      <Main>
        <Header>
          <Link to="/" href="/">
            <LogoWrapper>
              <Logo size="200" color={tints[tint]} />
            </LogoWrapper>
          </Link>
          <Navigation color={tints[tint]}>
            <Link to="/stories" href="/stories">
              <NavLink active={activeNav === "/stories"}>Stories</NavLink>
            </Link>
            <Link to="/shop" href="/shop">
              <NavLink active={activeNav === "/shop"}>Shop</NavLink>
            </Link>
          </Navigation>
        </Header>
        {children}
        {!hideFooter && (
          <Footer>
            <a href="https://crystallize.com">
              <svg
                width="20"
                height="30"
                viewBox="0 0 49 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M38.239 31.318L27.865 71.476L14.472 62.932L24.847 0L39.983 24.585L38.239 31.318Z"
                    fill="#A4D7DA"
                  />
                  <path
                    d="M9.543 32.532L5.969 57.5L3.957 56.219L0 27.181L9.543 32.532Z"
                    fill="#D0E9EA"
                  />
                  <path
                    d="M20.877 15.927L13.258 62.154L7.19601 58.285L14.633 6.331L20.877 15.927Z"
                    fill="#BBE0E2"
                  />
                  <path
                    d="M48.171 29.514L39.587 62.597L33.9 67.305L29.367 70.966L39.058 33.451L48.171 29.514Z"
                    fill="#8ECED3"
                  />
                </g>
              </svg>
              eCommerce by Crystallize
            </a>
          </Footer>
        )}
      </Main>
    </>
  );
};

export default Layout;
