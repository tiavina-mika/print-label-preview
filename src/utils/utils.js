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
