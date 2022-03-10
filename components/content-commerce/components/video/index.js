import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Video as VC } from "@crystallize/react-video";
import "@crystallize/react-video/dist/styles.css";

const Outer = styled.div`
  min-height: 50px;

  img {
    object-fit: cover;
    height: auto;
  }
`;

export default function Video({ play, className, ...rest }) {
  const ref = useRef();

  useEffect(() => {
    if (typeof play === "boolean" && ref.current) {
      const video = ref.current.querySelector("video");
      if (video) {
        try {
          if (play) {
            video.play();
          } else {
            video.pause();
          }
        } catch (e) {}
      }
    }
  }, [play]);

  return (
    <Outer ref={ref} className={className}>
      <VC {...rest} controls={false} />
    </Outer>
  );
}
