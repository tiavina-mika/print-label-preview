import { round } from "lodash";
import { getKJoules } from "../utils/utils";

const getNutritionInfoPer100g = (value, netWeight, roundedNumber = 1) => {
  const nutritionValuePer100 = value / netWeight / 1000;
  return round(nutritionValuePer100, roundedNumber);
};

const NutritionInformation70 = ({ nutritionalInfo, netWeightKg }) => {
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
        <strong>Valeurs nutrionnelles pour 100g -</strong>
        <br />
        Énergie {caloriesInKJ}&nbsp;kJ ({caloriesInKCal}&nbsp;kCal) / Matières
        <br />
        grasses {fat}&nbsp;g dont acides gras
        <br />
        saturés {saturatedFattyAcids}
        &nbsp;g / Glucides {carbohydrates}&nbsp;g dont
        <br />
        sucres {sugar}&nbsp;g / Protéines {proteins}&nbsp;g /
        <br />
        Fibres {fibers} &nbsp;g / Sel {salt}&nbsp;g
      </p>
    </article>
  );
};

export default NutritionInformation70;
