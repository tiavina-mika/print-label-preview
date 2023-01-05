import { getKJoules } from "../utils/utils";

const NutritionInformation = ({ nutritionalInfo }) => {
  return (
    <article id="nutrition_information_container">
      {nutritionalInfo ? (
        <table id="nutriton_information_table">
          <tbody>
            {typeof nutritionalInfo.calories === "number" ? (
              <>
                <tr id="nutrition_information_table_line">
                  <th>Valeur énergétique</th>
                  <td id="nutrition_information_value_cell">
                    {getKJoules(nutritionalInfo.calories)}&nbsp;Kj
                  </td>
                </tr>
                <tr id="nutrition_information_table_line">
                  <th></th>
                  <td id="nutrition_information_value_cell">
                    {nutritionalInfo.calories}&nbsp;Kcal
                  </td>
                </tr>
              </>
            ) : null}
            {typeof nutritionalInfo.fat === "number" &&
            typeof nutritionalInfo.saturatedFattyAcids ? (
              <>
                <tr id="nutrition_information_table_line">
                  <th>Matières grasses dont</th>
                  <td>{nutritionalInfo.fat}&nbsp;g</td>
                </tr>
                <tr id="nutrition_information_table_line">
                  <th>Acide gras saturés</th>
                  <td>{nutritionalInfo.saturatedFattyAcids}&nbsp;g</td>
                </tr>
              </>
            ) : null}

            {typeof nutritionalInfo.carbohydrates === "number" ? (
              <>
                <tr id="nutrition_information_table_line">
                  <th>Glucides dont</th>
                  <td>{nutritionalInfo.carbohydrates}&nbsp;g</td>
                </tr>
                <tr id="nutrition_information_table_line">
                  <th>Sucres</th>
                  <td id="nutrition_information_value_cell">
                    {nutritionalInfo.sugar}&nbsp;g
                  </td>
                </tr>
              </>
            ) : null}
            {typeof nutritionalInfo.proteins === "number" ? (
              <tr id="nutrition_information_table_line">
                <th>Protéines</th>
                <td id="nutrition_information_value_cell">
                  {nutritionalInfo.proteins}&nbsp;g
                </td>
              </tr>
            ) : null}
            {typeof nutritionalInfo.fibers === "number" ? (
              <tr id="nutrition_information_table_line">
                <th>Fibres</th>
                <td id="nutrition_information_value_cell">
                  {nutritionalInfo.fibers}&nbsp;g
                </td>
              </tr>
            ) : null}
            {typeof nutritionalInfo.salt === "number" ? (
              <tr id="nutrition_information_table_line">
                <th>Sel</th>
                <td id="nutrition_information_value_cell">
                  {nutritionalInfo.salt}&nbsp;g
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      ) : null}
    </article>
  );
};

export default NutritionInformation;
