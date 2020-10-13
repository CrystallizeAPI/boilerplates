import { VimePlayer, VimeHls, VimeDash } from '@vime/react'

export default function Video({ playlists, thumbnails, ...rest }) {
  const poster = thumbnails?.[0].url

  return (
    <VimePlayer muted {...rest}>
      {playlists.map((src) => {
        if (src.endsWith('.m3u8')) {
          return (
            <VimeHls key="src-hls" version="latest" poster={poster}>
              <source data-src={src} type="application/x-mpegURL" />
            </VimeHls>
          )
        }

        return (
          <VimeDash
            key="src-dash"
            data-src={src}
            version="latest"
            poster={poster}
          />
        )
      })}
    </VimePlayer>
  )
}
