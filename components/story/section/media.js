import styled from "styled-components";

import { Image } from "@crystallize/react-image";
import Video from "components/video";

const StyledVideo = styled(Video)`
  height: 100vh !important;
  display: flex;

  > * {
    flex: 1 1 auto;
    display: flex;
  }

  .react-video {
    flex: 1 1 auto;
    display: flex;

    figure {
      flex: 1 1 auto;
      display: flex;
    }

    img {
      height: 100%;
    }
  }

  video {
    object-fit: cover !important;
  }
`;

const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  figure {
    width: 100%;
    height: 100%;
  }
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.4) 40%
    );
  }
`;

export default function Media({ images, videos, show, nolazy }) {
  if (!!videos) {
    return (
      <StyledVideo
        autoPlay
        playsInline
        loop
        itemProp="video"
        play={show}
        {...videos?.[0]}
      />
    );
  }

  return (
    <Outer>
      <Image
        {...images?.[0]}
        itemProp="image"
        sizes="100vw"
        loading={nolazy ? "eager" : "lazy"}
      />
    </Outer>
  );
}
