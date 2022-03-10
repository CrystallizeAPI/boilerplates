import { useRef } from "react";
import styled from "styled-components";

import { useIntersectionObserver } from "lib/intersection-observer";

import Media from "./media";

const Outer = styled.section`
  height: 100vh;
  overflow-y: auto;
  position: relative;
  scroll-snap-align: start;
`;

const CoverMedia = styled.div`
  opacity: ${(p) => (p.$show ? 1 : 0)};
  position: fixed;
  top: 0;
  z-index: -1;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: opacity 0.3s ease-in-out 0ms;

  &:before {
    position: absolute;
    content: "";
    background: red;
    left: 0;
    height: 200px;
    width: 100%;
    bottom: 0;

    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  z-index: 3;
  height: 100%;
  width: 100%;
`;

export default function Section({ children, images, videos, nolazy }) {
  const ref = useRef();
  const intersectionEntry = useIntersectionObserver(ref, {
    threshold: 0.2,
  });

  const show = intersectionEntry?.intersectionRatio > 0.5;

  return (
    <Outer ref={ref}>
      <CoverMedia $show={show}>
        <Media images={images} videos={videos} show={show} nolazy={nolazy} />
      </CoverMedia>
      <ContentWrapper>{children}</ContentWrapper>
    </Outer>
  );
}
