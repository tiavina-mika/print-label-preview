import { round } from "lodash";
import { getKJoules } from "../utils/utils";

const getNutritionInfoPer100g = (value, netWeight, roundedNumber = 1) => {
  const nutritionValuePer100 = value / netWeight / 1000;
  return round(nutritionValuePer100, roundedNumber);
};

const NutritionInformation = ({ nutritionalInfo, netWeightKg }) => {
  const caloriesInKJ = getNutritionInfoPer100g(
    getKJoules(nutritionalInfo.calories),
    netWeightKg,
    0
  );
  const caloriesInKCal = getNutritionInfoPer100g(
    nutritionalInfo.calories,
    netWeightKg,
    0
  );
  const fat = getNutritionInfoPer100g(nutritionalInfo.fat, netWeightKg);
  const saturatedFattyAcids = getNutritionInfoPer100g(
    nutritionalInfo.saturatedFattyAcids,
    netWeightKg
  );
  const carbohydrates = getNutritionInfoPer100g(
    nutritionalInfo.carbohydrates,
    netWeightKg
  );
  const sugar = getNutritionInfoPer100g(nutritionalInfo.sugar, netWeightKg);
  const proteins = getNutritionInfoPer100g(
    nutritionalInfo.proteins,
    netWeightKg
  );
  const fibers = getNutritionInfoPer100g(nutritionalInfo.fibers, netWeightKg);
  const salt = getNutritionInfoPer100g(nutritionalInfo.salt, netWeightKg);

  return (
    <article id="nutrition_information_container">
      <p>
        <strong>Valeurs nutrionnelles pour 100g</strong> - Énergie
        <br />
        {caloriesInKJ}&nbsp;kJ ({caloriesInKCal}&nbsp;kCal) / Matières grasses{" "}
        {fat}&nbsp;g
        <br />
        dont acides gras saturés {saturatedFattyAcids}
        &nbsp;g / Glucides
        <br />
        {carbohydrates}&nbsp;g dont sucres {sugar}&nbsp;g / Protéines
        <br />
        {proteins}&nbsp;g / Fibres {fibers}
        &nbsp;g / Sel {salt}&nbsp;g
      </p>
    </article>
  );
};

export default NutritionInformation;
