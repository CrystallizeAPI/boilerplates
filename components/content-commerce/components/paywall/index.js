import styled from "styled-components";
import Link from "next/link";
// import { responsive } from "ui";

import Illustration from "./illustration";
const Outer = styled.section`
  height: 100vh;
  overflow-y: auto;
  position: relative;
  scroll-snap-align: start;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;
const Inner = styled.div`
  height: 100%;
  display: flex;

  align-items: center;
  svg {
    width: 200px;
    margin-right: 50px;
  }
  h2 {
    font-size: 30px;
  }
  ${({ theme }) => theme.responsive.xs} {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    svg {
      width: 150px;
    }
  }
`;

const Actions = styled.div`
  display: flex;
`;
const Btn = styled.button`
  border: 1px solid #fff;
  background: transparent;
  font-size: 16px;
  color: #fff;
  margin-top: 15px;
  font-weight: 800;
  padding: 10px 25px;
  border-radius: 5px;
  &:hover {
    color: #000;
    background: #fff;
  }
`;

export default function Paywall() {
  return (
    <Outer>
      <Inner>
        <Illustration />
        <div>
          <h1>Premium content</h1>

          <p>To read the full article, please login or buy a subscription.</p>
          <Actions>
            <Link href="/login">
              <Btn>Login</Btn>
            </Link>
          </Actions>
        </div>
      </Inner>
    </Outer>
  );
}
