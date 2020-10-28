import React, { useRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import is from "styled-is";
import dynamic from "next/dynamic";
import Image from "@crystallize/react-image";

import { useIntersectionObserver } from "lib/intersection-observer";

const loaderHideAnim = keyframes`
  0% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    z-index: 0;
  }
`;

const Outer = styled.div`
  position: relative;
  min-height: 50px;
`;

const Loader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  ${is("$hide")`
    animation: ${loaderHideAnim} 2000ms forwards;
  `};

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const VideoPlayer = dynamic(() => import("./player"));

export default function Video({
  playlists,
  thumbnails,
  autoplay,
  loop,
  controls,
  fluid,
  ...rest
}) {
  const ref = useRef();
  const [load, setLoad] = useState(false);
  const [videoIsReady, setVideoIsReady] = useState(false);
  const entry = useIntersectionObserver(ref);

  function onVideoReady() {
    setVideoIsReady(true);
  }

  useEffect(() => {
    if (entry?.isIntersecting && !load) {
      setLoad(true);
    }
  }, [entry, load]);

  return (
    <Outer ref={ref} {...rest}>
      <Loader $hide={videoIsReady}>
        <Image {...thumbnails?.[0]} sizes="100vw" />
      </Loader>
      {load && (
        <VideoPlayer
          playlists={playlists}
          thumbnails={thumbnails}
          autoplay={autoplay}
          loop={loop}
          controls={controls}
          fluid={fluid}
          onReady={onVideoReady}
        />
      )}
    </Outer>
  );
}
