import React from "react";
import styled from "styled-components";
import Header from "./header";
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

const Layout = ({ tint = "black", children, hideFooter = false }) => {
  return (
    <>
      <Main>
        <Header tint={tint} />
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
