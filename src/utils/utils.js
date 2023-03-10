import { round } from "lodash";

export const getFontSize = (text, options) => {
  const [min, max, wordsPerLine = 6, maxLines = 4] = options;
  const wordCount = text.trim().split(" ").length;
  const lineCount = Math.max(1, wordCount / wordsPerLine);

  if (lineCount === 1) {
    return max;
  }

  if (lineCount >= maxLines) {
    return min;
  }

  return Math.min(max, (maxLines / lineCount) * min);
};

export const getFontSizesByCharCount = (text, wordCountLimit, options) => {
  const [min, max] = options;
  const wordCount = text.length;

  if (wordCount < wordCountLimit) {
    return max;
  }

  return min;
};

export const minTommss = (minutes) => {
  if (isNaN(parseFloat(minutes))) {
    return "";
  }

  const sign = minutes < 0 ? "-" : "";
  const min = Math.floor(Math.abs(minutes));
  const sec = Math.floor((Math.abs(minutes) * 60) % 60);

  return `${sign}${min ? min + "mn" : ""}${sec ? sec : ""}`.trim();
};

export const formatDuration = (duration) => {
  if (duration < 1) {
    return duration * 60 + " sec";
  }

  if (Number.isInteger(duration)) {
    return duration + " min";
  }

  const min = Math.floor(Math.abs(2.5));
  const sec = Math.floor((Math.abs(2.5) * 60) % 60);

  return min + "’" + sec;
};

export const getHeatingInstructionOfABrand = (heatingInstructions, brand) => {
  if (Array.isArray(heatingInstructions)) {
    const brandInstruction = heatingInstructions.find(
      (instruction) => instruction.brand === brand
    );
    if (!brandInstruction) return null;
    return heatingInstructions.find(
      (instruction) => instruction.brand === brand
    ).value;
  }

  return heatingInstructions;
};

export const getPercentFromWeight = (netWeight) => (perPortion) =>
  isNaN(parseFloat(perPortion)) || isNaN(parseFloat(netWeight))
    ? "-"
    : round((parseFloat(perPortion) / parseFloat(netWeight)) * 100, 1);

export const getKJoules = (kcals) =>
  isNaN(parseFloat(kcals)) ? "-" : round(parseFloat(kcals) / 0.23890295761862);

export const getSpecialInstructionCharCount = ({
  heatingInstructions,
  specialInstruction,
  preparation
}) => {
  let charCount = specialInstruction.length;

  if (preparation !== "1" && heatingInstructions?.microwave) {
    const microwaveDetails = `${minTommss(
      heatingInstructions.microwave.duration
    )} ; ${heatingInstructions.microwave.power} Watt`;

    charCount += heatingInstructions.microwave.instructions.length;
    charCount += microwaveDetails.length;
  }

  return charCount;
};

export const getIngredients = (ingredients, isBio) => {
  const ingredientsString = `Ingredients : ${ingredients
    .map((ingredient) => {
      return `${ingredient.commercialName}${
        isBio && ingredient.isBio ? "*" : ""
      }${ingredient.pct > 1.0 ? ` (${ingredient.pct.toFixed(1)}%)` : ""}${
        ingredient.allergens.length > 0
          ? `(${ingredient.allergens
              .map((allergen) => allergen.name)
              .join(",")})`
          : ""
      }`;
    })
    .join(",")}`;

  return ingredientsString;
};

export const getSpecialInstructionsText = (
  specialInstruction,
  heatingInstructions,
  maxTextLength = 0
) => {
  let text = specialInstruction + " Watt";
  let isLongInstructionText = false;

  if (heatingInstructions && heatingInstructions.microwave) {
    const instructions = heatingInstructions.microwave.instructions;

    text += instructions + heatingInstructions.microwave.power;
    isLongInstructionText = instructions.length > maxTextLength;
  }

  return {
    isLongInstructionText,
    text
  };
};
