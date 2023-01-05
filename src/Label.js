import "./styles/FC90.css";
import "./styles/base.css";
import "./styles/preview.css";
import Logo from "./components/Logo";
import ProductName from "./components/ProductName";
import Preparation from "./components/Preparation";
import HeatingInstruction from "./components/HeatingInstruction";
import Ingredients from "./components/Ingredients";
import { getHeatingInstructionOfABrand } from "./utils/utils";
import NutritionInformation from "./components/NutritionInformation";
import Nutriscore from "./components/Nutriscore";
import Ecoscore from "./components/Ecoscore";
import UniqueCode from "./components/UniqueCode";
import KitchenArea from "./components/KitchenArea";

const Label = (props) => {
  const heatingInstructions = getHeatingInstructionOfABrand(
    props.product.heatingInstructions,
    "FOODCHERI"
  );

  return (
    <main>
      <div className="in">
        <article>
          <Logo />
          <div id="top">
            <ProductName name={props.product.commercialName} />
            <Preparation
              specialInstruction={props.product.specialInstruction}
            />
            <HeatingInstruction
              heatingInstructions={heatingInstructions}
              preparation={props.product.preparation}
            />
            <Ingredients isBio={props.isBio} ingredients={props.ingredients} />
          </div>
          <div id="bottom">
            <div id="bottom-left">
              <NutritionInformation
                nutritionalInfo={props.product.nutritionInformation}
              />
              <KitchenArea />
            </div>
            <div id="bottom-center">
              <Nutriscore
                nutriscore={props.product.nutritionInformation?.nutriscore}
              />
              <Ecoscore
                ecoscore={props.product.nutritionInformation?.carboneScore}
              />
              <UniqueCode uniqueCode={props.product.uniqueCode} />
            </div>
            <div id="bottom-right">right</div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default Label;
