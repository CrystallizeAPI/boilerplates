import React from "react";
import { ContentTransformer } from "@crystallize/react-content-transformer";
import styled from "styled-components";

import Media from "components/media";
const H1 = styled.h1`
  margin: 0%;
  padding: 0;
  line-height: 110%;
  font-size: calc(24px + 1.8vw);
  max-width: 1000px;
`;
const Lead = styled.div`
  font-size: calc(12px + 0.5vw);
  max-width: 600px;
  text-align: center;
`;

const Block = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  text-align: center;
  padding: 0 2rem;

  ${({ theme }) => theme.responsive.mdPlus} {
    padding: 0;
  }
`;

const Arrow = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 50px;
  &:after,
  &:before {
    width: 57%;
    height: 4px;
    border-radius: 3px;
    content: "";
    position: absolute;
    top: 0;
    z-index: 20;
  }
  &:after {
    right: 0;
    /* transform-origin: 100 50%; */
    transform: rotate(-35deg);
  }
  &:before {
    left: 0;
    transform: rotate(35deg);
  }
`;
const Hero = styled.section`
  height: 80vh;
  position: relative;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  ${H1} {
    color: ${(p) => (p.hasMedia ? "#fff" : "000")};
  }
  ${Lead} {
    color: ${(p) => (p.hasMedia ? "#fff" : "000")};
  }
  ${Block} {
    background: ${(p) => (p.hasMedia ? "rgba(0, 0, 0, 0.2)" : "#fff")};
  }
  ${Arrow} {
    &:before,
    &:after {
      background: ${(p) => (p.hasMedia ? "white" : "black")};
    }
  }
`;

const HeroBlock = ({ images, videos, title, lead }) => {
  const hasMedia = !!images || !!videos;
  return (
    <Hero hasMedia={hasMedia}>
      <Block>
        {!!title && <H1>{title}</H1>}
        {!!lead && (
          <Lead>
            <ContentTransformer json={lead?.json} />
          </Lead>
        )}
      </Block>
      {!!hasMedia && <Media images={images} videos={videos} />}
      <Arrow />
    </Hero>
  );
};

export default HeroBlock;
