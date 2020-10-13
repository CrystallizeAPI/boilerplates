import Image from '@crystallize/react-image'
import Video from 'components/video'
import styled from 'styled-components'

const StyledVideo = styled(Video)`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0%;
  video {
    object-fit: cover !important;
  }
`

const Outer = styled.div`
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 1;
  }
`

export default function Media({ images, videos, show, nolazy }) {
  if (!!videos) {
    return (
      <StyledVideo
        autoplay
        playsInline
        loop
        play={show}
        nolazy={nolazy}
        {...videos?.[0]}
      />
    )
  }

  return (
    <Outer>
      <Image
        {...images?.[0]}
        sizes="100vw"
        loading={nolazy ? 'eager' : 'lazy'}
      />
    </Outer>
  )
}
