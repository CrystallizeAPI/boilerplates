import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import Image from "@crystallize/react-image";

import { useIntersectionObserver } from "lib/intersection-observer";

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
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

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
    setTimeout(() => setVideoIsReady(true), 1000);
  }

  useEffect(() => {
    if (entry?.isIntersecting && !load) {
      setLoad(true);
    }
  }, [entry, load]);

  return (
    <Outer ref={ref} {...rest}>
      <Loader>
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
