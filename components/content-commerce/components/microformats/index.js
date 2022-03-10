import React from "react";
import styled from "styled-components";
import Story from "./story";
import Product from "./product";

const NotSupported = styled.div`
  background: ${({ theme }) => theme.colors.productBg};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  strong {
    margin-right: 5px;
  }
`;
const renderer = (item) => {
  //Instead of type we are returning component based on the Shape name so we can have different renderers for each shape
  // (i.e differentiate on a Story and a Blog)
  const shapeTypes = {
    Product: () => <Product {...item} />,
    Folder: () => <div>Folder</div>,
    Story: () => <Story {...item} />,
  };

  const Component = shapeTypes[item.shape?.name];

  if (!Component) {
    console.log("item", item, "is not supported");
    return null;
  }

  return <Component />;
};

const MicroFormats = (item) => renderer(item);

export default MicroFormats;
