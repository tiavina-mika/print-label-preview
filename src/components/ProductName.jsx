import { getFontSize } from "../utils/utils";

const ProductName = ({ name }) => {
  const minMax = [3, 4.25];

  return (
    <article
      id="product_name_container"
      style={{ fontSize: getFontSize(name, [...minMax, 3, 2]) + "mm" }}
    >
      {name}
    </article>
  );
};

export default ProductName;
