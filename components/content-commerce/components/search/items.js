import styled from "styled-components";
import { Image } from "@crystallize/react-image";
import Link from "next/link";
const Item = styled.div`
  width: 100%;
  display: grid;
  height: 55px;
  align-items: center;
  grid-template-columns: 40px 1fr 50px;
  grid-gap: 20px;
`;
const ItemImage = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid #fff;
  border-radius: 6px;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const Name = styled.p`
  font-weight: 600;
  color: #000;
  text-decoration: none !important;
`;

const Price = styled.span`
  color: #000;
  font-size: 12px;
  font-weight: 600;
  padding-bottom: 15px;
`;

const Slug = styled.span`
  font-size: 12px;
  display: block;
  opacity: 0.6;
  font-weight: 400;
`;
const SearchItems = ({ node, redirecting }) => {
  // console.log("node", node);
  const renderType = {
    product: <Product {...node} redirecting={redirecting} />,
    document: <Document {...node} redirecting={redirecting} />,
    folder: <Folder {...node} redirecting={redirecting} />,
  };

  return renderType[node.type];
};

const Product = ({
  name,
  matchingVariant: { price, images },
  path,
  redirecting,
}) => {
  return (
    <li>
      <Link href={path}>
        <a onClick={() => redirecting()}>
          <Item>
            <ItemImage>
              <Image {...images?.[0]} sizes="100px" />
            </ItemImage>
            <Name>
              {name}
              <Slug>{path}</Slug>
            </Name>
            <Price>${price}</Price>
          </Item>
        </a>
      </Link>
    </li>
  );
};
const Document = ({ name, path, redirecting }) => {
  return (
    <li>
      <Link href={path}>
        <a onClick={() => redirecting()}>
          <Item className="search-document">
            <div></div>
            <Name>
              {name}
              <Slug>{path}</Slug>
            </Name>
          </Item>
        </a>
      </Link>
    </li>
  );
};
const Folder = ({ name, path, redirecting }) => {
  return (
    <li>
      <Link href={path}>
        <a onClick={() => redirecting()}>
          <Item className="search-folder">
            <div></div>
            <Name>
              {name}
              <Slug>{path}</Slug>
            </Name>
          </Item>
        </a>
      </Link>
    </li>
  );
};

export default SearchItems;
