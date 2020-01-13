import React from "react"
import CrystallizeContent from "@crystallize/content-transformer/react"
import Image from "@crystallize/react-image"

import { Outer, Title, Body, Images } from "./styles"

const Paragraph = ({ body, title, images }) => {
  return (
    <Outer>
      {!!title && title.text && (
        <Title>
          <h2>{title.text}</h2>
        </Title>
      )}
      {!!body && body.json && body.json.length > 0 && (
        <Body>
          <CrystallizeContent {...body.json} />
        </Body>
      )}
      {!!images && images.length > 0 && (
        <Images>
          {images.map((image, index) => (
            <Image key={index} {...image} />
          ))}
        </Images>
      )}
    </Outer>
  )
}

export default Paragraph
