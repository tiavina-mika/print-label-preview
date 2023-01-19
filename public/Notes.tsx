const titleCount = props.product.commercialName.length;
console.log("titleCount", titleCount);

const specialInstructionCount = getSpecialInstructionCharCount({
  specialInstruction: props.product.specialInstruction,
  heatingInstructions,
  preparation: props.product.preparation
});

console.log("specialInstructionCount", specialInstructionCount);
const ingredientsCount = getIngredients(props.ingredients, props.isBio);
console.log("ingredientsCount", ingredientsCount.length);
