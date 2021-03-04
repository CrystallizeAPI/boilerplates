import React from "react"
import ContentTransformer from "ui/content-transformer"
import { H3 } from "ui"

import { Outer, Title, Body, Text, Media } from "./styles"
import Images from "../images"
import Videos from "../videos"

const Paragraph = ({
  body,
  title,
  images,
  videos,
  headingComponent: HeadingComponent = H3,
}) => {
  const hasMedia = !!images || !!videos
  return (
    <Outer media={hasMedia ? hasMedia : undefined}>
      <Text>
        {!!title && title.text && (
          <Title>
            <HeadingComponent>{title.text}</HeadingComponent>
          </Title>
        )}
        {body?.json?.length > 0 && (
          <Body>
            <ContentTransformer {...body.json} />
          </Body>
        )}
      </Text>
      {hasMedia && (
        <Media>
          <Images images={images} />
          <Videos videos={videos} />
        </Media>
      )}
    </Outer>
  )
}

export default Paragraph
