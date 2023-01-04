import "./styles/FC90.css";
import "./styles/base.css";
import "./styles/preview.css";
import { Logo } from "./components/Logo";

const App = () => {
  return (
    <main>
      <div className="in">
        <article>
          <Logo />
          <div id="top">x</div>
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
