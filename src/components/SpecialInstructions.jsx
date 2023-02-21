import { formatDuration, getFontSizesByCharCount } from "../utils/utils";

const MAX_INSTRUCTIONS_LIMIT = 51;

const SpecialInstructions = ({
  specialInstruction,
  heatingInstructions,
  preparation
}) => {
  const { instructions } = heatingInstructions.microwave;

  // all text
  const text =
    specialInstruction +
    instructions +
    heatingInstructions.microwave.power +
    " Watt";

  // font size depending on the character count
  const fontSize = getFontSizesByCharCount(text, 50, [8, 10]) + "px";

  const isLongInstructionText = instructions.length > MAX_INSTRUCTIONS_LIMIT;

  return (
    <article
      id="special_instruction_container"
      className={
        isLongInstructionText ? "special_instruction_container_long" : ""
      }
    >
      <p style={{ fontSize }}>{specialInstruction}</p>
      {preparation !== "1" && heatingInstructions?.microwave && (
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
                ? "long_instructions_text"
                : "short_instructions_text"
            }
          />
          {instructions}
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
