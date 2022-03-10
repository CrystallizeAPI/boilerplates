import React from "react"
import styled from "styled-components"
import { Image } from "@crystallize/react-image"
import ContentTransformer from "ui/content-transformer"
import { responsive } from "ui"

const Img = styled.div`
  position: absolute;
  bottom: 0;
  content: "";
  left: 0;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
  max-width: 100%;

  :after {
    background: linear-gradient(
      -90deg,
      rgba(8, 7, 8, 0) 0%,
      rgba(8, 7, 8, 0.6) 100%
    );
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  img {
    position: relative;
    height: 100%;
    width: 100%;
  }

  figure {
    width: 100%;
    height: 100%;
  }

  ${responsive.smPlus} {
    padding: 0;
    max-width: 100%;
  }

  ${responsive.mdPlus} {
    max-width: 100%;
  }
`
const Description = styled.div`
  p,
  li {
    font-size: var(--font-size-body);
    line-height: 1.8em;
    color: #fff;
  }
`
const Title = styled.h2`
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: 15px;
`
const Button = styled.a`
  padding: 10px 15px;
  display: inline-block;
  margin-top: 15px;
  font-size: var(--font-size-sm);
  font-weight: 600;
  border-radius: 4px;
  color: #000;
  background: #fff;
`

const Content = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  height: 100%;
  width: 100%;
  padding: 1.5em;
  min-height: 350px;

  ${responsive.smPlus} {
    padding: 0;
    padding: 5em 50px;
    flex-direction: row;
    margin-right: 30px;
    max-width: var(--font-max-width);
    padding: 0 5em;
    margin-right: 0;
  }

  ${responsive.mdPlus} {
    min-height: 600px;
  }

  ${responsive.lg} {
    min-height: 700px;
  }
  ${responsive.xl} {
    min-height: 800px;
  }
`

const Outer = styled.div`
  border: 4px solid transparent;
  border: 1px solid #dfdfdf;
  margin-top: 15px;
  display: flex;
  margin-bottom: 100px; // @todo: move this responsalibity to the layout
  margin-top: 15px; // @todo: move this responsalibity to the layout
  position: relative;
  flex-direction: column;
  display: block;
  padding: 0;
  position: relative;

  ${responsive.smPlus} {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
  }
`

const Banner = ({
  title,
  description,
  link,
  linkText,
  image,
  addTextAsOverlay,
}) => (
  <Outer className={addTextAsOverlay ? "banner--withOverlay" : ""}>
    <Content className="banner-content">
      <div>
        {!!title && <Title>{title}</Title>}
        {!!description && (
          <Description>
            <ContentTransformer {...description} />
          </Description>
        )}
        {!!link && (
          <Button className="banner-button" href={link}>
            {linkText}
          </Button>
        )}
      </div>
    </Content>
    <Img className="banner-media">
      <Image {...image?.[0]} sizes="(max-width: 700px) 100vw, 1200px" />
    </Img>
  </Outer>
)

export default Banner
