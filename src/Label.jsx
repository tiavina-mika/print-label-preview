import Logo from "./components/Logo";
import ProductName from "./components/ProductName";
import SpecialInstructions from "./components/SpecialInstructions";
import Ingredients from "./components/Ingredients";
import { getHeatingInstructionOfABrand } from "./utils/utils";
import NutritionInformation from "./components/NutritionInformation";
import Nutriscore from "./components/Nutriscore";
import Ecoscore from "./components/Ecoscore";
import UniqueCode from "./components/UniqueCode";
import Kitchen from "./components/Kitchen";
import NetWeight from "./components/NetWeight";
import DLC from "./components/DLC";
import Agreement from "./components/Agreement";
import Address from "./components/Address";
import CodeBio from "./components/CodeBio";

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
          <div id="middle">
            <ProductName name={props.product.commercialName} />
            {/* for margin */}
            <article className="splitter" />
            {props.product.specialInstruction && (
              <>
                <SpecialInstructions
                  specialInstruction={props.product.specialInstruction}
                  heatingInstructions={heatingInstructions}
                  preparation={props.product.preparation}
                />
                {/* for margin */}
                <article className="splitter" />
              </>
            )}
            <Ingredients
              isBio={props.isBio}
              ingredients={props.ingredients}
              legalName={props.legalName}
            />
            {/* for margin */}
            <article className="splitter" />
          </div>
          <div id="bottom">
            <div id="bottom-left">
              <NutritionInformation
                nutritionalInfo={props.product.nutritionInformation}
                netWeightKg={props.product.netWeight}
              />
              <Kitchen />
            </div>
            <div id="bottom-center">
              <Nutriscore
                nutriscore={props.product.nutritionInformation?.nutriscore}
              />
              <Ecoscore
                ecoscore={props.product.nutritionInformation?.carboneScore}
              />
              <CodeBio />
              <UniqueCode uniqueCode={props.product.uniqueCode} />
            </div>
            <div id="bottom-right">
              <NetWeight netWeightKg={props.product.netWeight} />
              {!props.hideDlc && (
                <DLC dlc={props.dlc} lotNumber={props.lotNumber} />
              )}

              <Address />
              <Agreement
                number={props.sanitaryApprovalNumber}
                brand="FC"
                countryCode={props.countryCode}
                continentCode={props.continentCode}
              />
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default Label;
