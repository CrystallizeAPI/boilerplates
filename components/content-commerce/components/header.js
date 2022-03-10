import Logo from "ui/logo";
import Link from "next/link";
import styled from "styled-components";
import { IconUser, IconSearch, IconCart } from "ui/icons";
import { useRouter } from "next/router";
import Search from "./search";

const navHeight = "130px";
const tints = {
  white: "#fff",
  black: "#000",
  blue: "blue",
};
const Outer = styled.header`
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
  ${({ theme }) => theme.responsive.xs} {
    display: grid;
    grid-template-columns: 1r 1fr;
    padding: 10px 20px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  color: ${(p) => p.color};
  ${({ theme }) => theme.responsive.xs} {
    height: 50px;
  }
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
    padding: 0 20px;
  }
  ${({ theme }) => theme.responsive.xs} {
    padding: 0 10px;
    &:first-child {
      padding-left: 0;
    }
  }
`;

const Actions = styled.div`
  display: flex;
`;
const ActionBtn = styled.a`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  margin: 0 3px;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0);
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.15);
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
  ${({ theme }) => theme.responsive.xs} {
    display: grid;
    grid-row-start: 1;
    grid-column-start: span 2;
  }
`;
const Header = ({ tint }) => {
  const router = useRouter();
  const activeNav = `/${router?.asPath?.split("/")?.[1]}`;
  return (
    <Outer>
      <Navigation color={tints[tint]}>
        <Link to="/stories" href="/stories">
          <NavLink active={activeNav === "/stories"}>Stories</NavLink>
        </Link>
        <Link to="/shop" href="/shop">
          <NavLink active={activeNav === "/shop"}>Shop</NavLink>
        </Link>
      </Navigation>
      <Link to="/" href="/">
        <LogoWrapper>
          <Logo size="200" color={tints[tint]} />
        </LogoWrapper>
      </Link>
      <Actions>
        <Search>
          <ActionBtn>
            <IconSearch fill={tints[tint]} />
          </ActionBtn>
        </Search>
        <ActionBtn as="a" href="/login">
          <IconUser fill={tints[tint]} />
        </ActionBtn>
        <ActionBtn>
          <IconCart fill={tints[tint]} />
        </ActionBtn>
      </Actions>
    </Outer>
  );
};

export default Header;
