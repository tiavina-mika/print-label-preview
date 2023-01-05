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

export const minTommss = (minutes) => {
  if (isNaN(parseFloat(minutes))) {
    return "";
  }

  const sign = minutes < 0 ? "-" : "";
  const min = Math.floor(Math.abs(minutes));
  const sec = Math.floor((Math.abs(minutes) * 60) % 60);

  return `${sign}${min ? min + "mn" : ""}${sec ? sec : ""}`.trim();
};

export const getHeatingInstructionOfABrand = (heatingInstructions, brand) => {
  console.log("heatingInstructions", heatingInstructions);
  if (Array.isArray(heatingInstructions)) {
    if (heatingInstructions.find((elem) => elem.brand === brand)) {
      return heatingInstructions.find((elem) => elem.brand === brand).value;
    } else {
      return null;
    }
  }

  return heatingInstructions;
};
