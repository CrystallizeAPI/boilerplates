import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import videojs from "video.js";
import "dashjs";
import "videojs-contrib-dash";
import "video.js/dist/video-js.css";

const HLS_EXTENSION = /\.(m3u8)($|\?)/i;
const DASH_EXTENSION = /\.(mpd)($|\?)/i;
const MOV_EXTENSION = /\.(mov)($|\?)/i;

function getVideoType(url) {
  if (HLS_EXTENSION.test(url)) {
    return "application/x-mpegURL";
  } else if (DASH_EXTENSION.test(url)) {
    return "application/dash+xml";
  } else if (MOV_EXTENSION.test(url)) {
    return "video/mp4";
  } else {
    return `video/mp4`;
  }
}

const Outer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  .video-js {
    height: 100% !important;
    width: 100% !important;
    position: absolute;
    z-index: 0;

    video {
      transform: none;

      &:not(.vjs-has-started) {
        cursor: pointer;
      }
    }

    button.vjs-big-play-button {
      opacity: 0;
    }
  }
`;

function VideoPlayer({
  playlists,
  autoplay = false,
  loop = false,
  controls = false,
  muted = true,
  play,
  onReady,
  ...rest
}) {
  const ref = useRef();
  const playerRef = useRef();

  useEffect(() => {
    const sources =
      playlists
        ?.map((playlist) => ({
          type: getVideoType(playlist),
          src: playlist,
        }))
        .sort((s) => (HLS_EXTENSION.test(s.src) ? -1 : 1)) || [];

    const videoElement = document.createElement("video");
    videoElement.setAttribute("playsinline", true);
    videoElement.classList.add("video-js");
    ref.current.appendChild(videoElement);

    playerRef.current = videojs(
      videoElement,
      {
        sources,
        autoplay,
        loop,
        muted,
        controls,
        playsinline: true
      },
      onReady
    );

    return () => {
      try {
        playerRef.current.dispose();
        playerRef.current = null;
      } catch (e) {
        console.log(e);
      }
    };
  });

  // Toggle play/pause
  useEffect(() => {
    if (playerRef.current) {
      try {
        if (play) {
          playerRef.current.play();
        } else {
          playerRef.current.pause();
        }
      } catch {}
    }
  }, [play]);

  if (!playlists || playlists.length === 0) {
    return null;
  }
  return <Outer {...rest} ref={ref} />;
}

export default React.memo(VideoPlayer, function areEqual(prevProps, nextProps) {
  return prevProps.play === nextProps.play;
});
