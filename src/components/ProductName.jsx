import { getFontSizesByCharCount } from "../utils/utils";

const ProductName = ({ name, minMaxFontSize = [13, 16] }) => {
  return (
    <article
      id="product_name_container"
      style={{ fontSize: getFontSizesByCharCount(name, 30, minMaxFontSize) + "px" }}
    >
      <span>{name}.</span>
    </article>
  );
};

export default ProductName;
