import styled from "styled-components";
import Link from "next/link";
import { Image } from "@crystallize/react-image";
import AspectRatioBlock from "ui/aspect-ratio-block";

const ImgWrapper = styled.div`
  display: flex;
  grid-column-start: span 2;
  overflow: hidden;
  width: 100%;
  picture {
    width: 100%;
  }
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    transition: all 0.2s ease-in-out;
  }
`;
const Content = styled.div`
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  height: 120px;
  align-items: center;
  grid-column-start: span 2;
  ${({ theme }) => theme.responsive.mdPlus} {
    padding: 25px 3rem 0;
  }
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 18px;
  ${({ theme }) => theme.responsive.mdPlus} {
    font-size: 20px;
  }
`;
const Price = styled.div`
  font-weight: 400;
  font-size: 16px;
  ${({ theme }) => theme.responsive.mdPlus} {
    font-size: 20px;
  }
`;
const Outer = styled.a`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr 1fr;
  position: relative;
  width: 100%;
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  background: ${({ theme }) => theme.colors.productBg};
  color: #000;
  overflow: hidden;
  text-decoration: none;
  transform: scale(1, 1);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    ${ImgWrapper} {
      img {
        transform: scale(1.05, 1.05);
      }
    }
  }
  ${({ theme }) => theme.responsive.smPlus} {
    padding: 0;
  }
`;

const Product = ({ path, name, defaultVariant }) => (
  <AspectRatioBlock orientation="portrait">
    <Link href="/shop/[product]" as={path} passHref>
      <Outer>
        <ImgWrapper>
          <Image {...defaultVariant?.images?.[0]} sizes="25vw" />
        </ImgWrapper>
        <Content>
          <Name>{name} </Name>
          <Price>${defaultVariant?.price}</Price>
        </Content>
      </Outer>
    </Link>
  </AspectRatioBlock>
);

export default Product;
