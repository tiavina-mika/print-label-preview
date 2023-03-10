import { getFontSizesByCharCount, getIngredients } from "../utils/utils";

const Ingredients = ({
  isBio,
  legalName,
  ingredients = [],
  minMaxFontSize = [7, 10],
  minMaxLineHeight = [8.5, 12]
}) => {
  const fontSize =
    getFontSizesByCharCount(
      getIngredients(ingredients, isBio),
      180,
      minMaxFontSize
    ) + "px";
  const lineHeight =
    getFontSizesByCharCount(
      getIngredients(ingredients, isBio),
      180,
      minMaxLineHeight
    ) + "px";

  return (
    <article id="ingredients_container" className={isBio ? "bio" : ""}>
      <p style={{ fontSize, lineHeight }}>
        <strong> {legalName ? legalName + " - " : ""} Ingrédients : </strong>
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
                    .join(", ")}
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
