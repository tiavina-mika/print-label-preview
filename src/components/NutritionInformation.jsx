import { getKJoules } from "../utils/utils";

const NutritionInformation = ({ nutritionalInfo }) => {
  return (
    <article id="nutrition_information_container">
      <p>
        <strong>Valeur nutrionnelle pour 100g</strong> - Enérgies
      </p>
      <p className="product_label">
        {getKJoules(nutritionalInfo.calories)}&nbsp;Kj (
        {nutritionalInfo.calories}&nbsp;Kcal) /Matières grasses{" "}
        {nutritionalInfo.fat}&nbsp;g
        <p></p>
        dont acide gras saturés {nutritionalInfo.saturatedFattyAcids}
        &nbsp;g/Glucide
      </p>
      <p className="product_label">
        {nutritionalInfo.carbohydrates}&nbsp;g dont sucres{" "}
        {nutritionalInfo.sugar}&nbsp;g/Protéines
      </p>
      <p className="product_label">
        {nutritionalInfo.proteins}&nbsp;g/Fibres {nutritionalInfo.fibers}
        &nbsp;g/Sel {nutritionalInfo.salt}&nbsp;g
      </p>
    </article>
  );
};

export default NutritionInformation;
