import {
  formatDuration,
  getFontSizesByCharCount,
  getSpecialInstructionsText
} from "../utils/utils";

const MAX_INSTRUCTIONS_LIMIT = 51;

const SpecialInstructions = ({
  specialInstruction,
  heatingInstructions,
  preparation
}) => {
  // all text
  const { text, isLongInstructionText } = getSpecialInstructionsText(
    specialInstruction,
    heatingInstructions,
    MAX_INSTRUCTIONS_LIMIT
  );

  // font size depending on the character count
  const fontSize = getFontSizesByCharCount(text, 50, [8, 10]) + "px";

  return (
    <article
      id="special_instruction_container"
      className={
        isLongInstructionText ? "special_instruction_container_long" : ""
      }
    >
      <p style={{ fontSize }}>{specialInstruction}</p>
      {preparation !== "1" &&
        heatingInstructions &&
        heatingInstructions.microwave && (
          <p
            style={{ fontSize }}
            className={
              "microwave_text" +
              (isLongInstructionText
                ? " microwave_text_long"
                : " microwave_text_short")
            }
          >
            <img
              alt=""
              src="/img/label/microwave-90.svg"
              className={
                isLongInstructionText
                  ? "microwave_text_long"
                  : "short_instructions_text"
              }
            />
            {heatingInstructions.microwave.instructions}
            &nbsp;(
            {`${formatDuration(heatingInstructions.microwave.duration)} ; ${
              heatingInstructions.microwave.power
            } Watt`}
            )
          </p>
        )}
    </article>
  );
};

export default SpecialInstructions;
