import { getFontSize } from "../utils/utils";

const getIngredients = (ingredients, isBio) => {
  const ingredientsString = `Ingredients : ${ingredients
    .map((ingredient) => {
      return `${ingredient.commercialName}${
        isBio && ingredient.isBio ? "*" : ""
      }${ingredient.pct > 1.0 ? ` (${ingredient.pct.toFixed(1)}%)` : ""}${
        ingredient.allergens.length > 0
          ? `(${ingredient.allergens
              .map((allergen) => allergen.name)
              .join(",")})`
          : ""
      }`;
    })
    .join(",")}`;

  return ingredientsString;
};

const minMax = [1.5, 2];

const Ingredients = ({ ingredients = [], isBio, legalName }) => {
  const fontSize =
    getFontSize(getIngredients(ingredients, isBio), [...minMax, 12, 4]) -
    (isBio ? 0.1 : 0) +
    "mm";

  return (
    <article id="ingredients_container" className={isBio ? "bio" : ""}>
      <p style={{ fontSize }}>
        <strong style={{ fontSize }}>
          {" "}
          {legalName ? legalName + " - " : ""} Ingrédients :{" "}
        </strong>
        {ingredients.map((ingredient, index) => {
          return (
            <span key={index}>
              {`${ingredient.commercialName}${
                isBio && ingredient.isBio ? "*" : ""
              }${
                ingredient.pct > 1.0 ? ` (${ingredient.pct.toFixed(1)}%)` : ""
              }`}
              {ingredient.allergens.length > 0 && (
                <strong id="allergens_text">
                  {" "}
                  (
                  {ingredient.allergens
                    .map((allergen) => allergen.name)
                    .join(",")}
                  )
                </strong>
              )}
              {index !== ingredients.length - 1 && <span>, </span>}
              {index === ingredients.length - 1 && isBio && (
                <span> * issu de l'agriculture biologique</span>
              )}
            </span>
          );
        })}
      </p>
    </article>
  );
};

export default Ingredients;
