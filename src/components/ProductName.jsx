import { getFontSizeByCharCount } from "../utils/utils";

const ProductName = ({ name }) => {
  const minMax = [13, 16];

  return (
    <article
      id="product_name_container"
      style={{ fontSize: getFontSizeByCharCount(name, 30, minMax) + "px" }}
    >
      {name}
    </article>
  );
};

export default ProductName;
