import "./styles/FC90.css";
import "./styles/base.css";
import "./styles/preview.css";
import Logo from "./components/Logo";
import ProductName from "./components/ProductName";
import Preparation from "./components/Preparation";

const props = {
  product: {
    commercialName:
      "Penne demi-complet, mijoté de champignons et lardons & chapelure rustique aux cèpes (work in progress)",
    specialInstruction: "Ce plat se mange froid"
  }
};
const App = () => {
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
          </div>
          {/* <ProductName name={props.product.commercialName}/>
            <Preparation specialInstruction={props.product.specialInstruction}/>
            <HeatingInstruction heatingInstructions={heatingInstructions} preparation={props.product.preparation}/>
            <Ingredients ingredients={props.ingredients} allergens={props.allergens}/>
            <NutritionInformation nutritionalInfo={props.product.nutritionInformation}/> */}
        </article>
      </div>
    </main>
  );
};

export default App;
