import { getFontSizesByCharCount } from "../utils/utils";

const ProductName = ({ name }) => {
  const minMax = [13, 16];

  return (
    <article
      id="product_name_container"
      style={{ fontSize: getFontSizesByCharCount(name, 30, minMax) + "px" }}
    >
      <span>{name}.</span>
    </article>
  );
};

export default ProductName;
