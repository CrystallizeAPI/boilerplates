const SearchItems = ({ edge }) => {
  const renderType = {
    product: <Product {...edge} />,
    document: <Document {...edge} />,
    folder: <Folder {...edge} />,
  };

  return renderType[edge.type];
};

const Product = ({}) => {
  return <div>Product</div>;
};
const Document = ({}) => {
  return <div>Document</div>;
};
const Folder = ({}) => {
  return <div>Folder</div>;
};
