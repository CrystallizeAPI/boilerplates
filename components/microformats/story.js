import React from "react";
import styled from "styled-components";
import Media from "components/media";
import { ContentTransformer } from "@crystallize/react-content-transformer";
import Link from "next/link";

const Outer = styled.a`
  display: block;
  background: #efefef;
  position: relative;
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  overflow: hidden;
  padding-bottom: 150%; /* 16:9, for an aspect ratio of 1:1 change to this value to 100% */
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
    transform: scale(1.03, 1.03);
  }
  ${({ theme }) => theme.responsive.smPlus} {
    padding-bottom: 56.25%; /* 16:9, for an aspect ratio of 1:1 change to this value to 100% */
  }
`;

const MediaWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

const Title = styled.span`
  color: #fff;
  font-weight: 900;
  font-size: 30px;
  line-height: 1em;
  text-align: center;
  ${({ theme }) => theme.responsive.smPlus} {
    text-align: left;
    font-size: calc(12px + 0.7vw);
  }
`;
const Intro = styled.div`
  color: #fff;
  padding-top: 0px;
  opacity: 1;
  transition: all 0.4s ease-in-out;
  text-align: center;
  ${({ theme }) => theme.responsive.smPlus} {
    text-align: left;
    padding-top: 25px;
    opacity: 0;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  left: 0;
  bottom: 40px;
  z-index: 10;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 0 calc(25px + 2vw);
  transition: all 0.3s ease-in-out;
  ${({ theme }) => theme.responsive.smPlus} {
    bottom: 0;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
const Inner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0%;
  top: 0;
  background: ${(p) => (p.hasMedia ? "transparent" : "#000")};

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
    z-index: 1;
    transition: all 0.3s ease-in-out;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0.5) 50%
    );
  }
  ${({ theme }) => theme.responsive.smPlus} {
    &:after {
      height: 70%;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      );
    }
    &:hover {
      &:after {
        height: 150%;
      }
      ${Content} {
        height: 100%;
        padding: calc(25px + 2vw);
      }
      ${Intro} {
        padding-top: 0;
        opacity: 1;
      }
    }
  }
`;

const Exclusive = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 2;
  letter-spacing: 0.5px;
  font-size: 16px;
  padding: 20px 25px;
  background: #000;
  color: #fff;
  border-radius: 0 0 0 2px;
  font-weight: 600;
  /* border-radius: 4px; */
`;

const StoryMicroformat = ({
  name,
  path,
  intro,
  videos,
  images,
  isExclusive,
}) => {
  const hasMedia = videos?.content?.videos || images?.content?.images;
  const exclusive = isExclusive?.content?.value;
  return (
    <Link as={path} href={path} passHref>
      <Outer>
        <Inner hasMedia={hasMedia}>
          <Content>
            <Title>{name}</Title>
            <Intro>
              <ContentTransformer json={intro?.content?.json} />
            </Intro>
          </Content>
          <MediaWrapper>
            {!!hasMedia && (
              <Media
                videos={videos?.content?.videos}
                images={images?.content?.images}
              />
            )}
          </MediaWrapper>
          {exclusive && <Exclusive>Premium</Exclusive>}
        </Inner>
      </Outer>
    </Link>
  );
};

export default StoryMicroformat;
