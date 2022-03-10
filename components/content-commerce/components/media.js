import styled from "styled-components";
import { Image } from "@crystallize/react-image";

import Video from "components/video";

const StyledVideo = styled(Video)`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0%;
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
  flex: 1 1 auto;
  z-index: 0;
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
`;

export default function Media({ images, videos, show, nolazy }) {
  if (!!videos) {
    return (
      <StyledVideo autoPlay playsInline loop play={show} {...videos?.[0]} />
    );
  }

  return (
    <Outer>
      <Image
        {...images?.[0]}
        sizes="100vw"
        loading={nolazy ? "eager" : "lazy"}
      />
    </Outer>
  );
}
