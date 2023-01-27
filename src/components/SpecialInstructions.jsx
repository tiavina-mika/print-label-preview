import { formatDuration, getFontSizesByCharCount } from "../utils/utils";

const SpecialInstructions = ({
  specialInstruction,
  heatingInstructions,
  preparation
}) => {
  const fontSize =
    getFontSizesByCharCount(specialInstruction, 50, [8, 10]) + "px";
  return (
    <article id="special_instruction_container">
      <p style={{ fontSize }}>{specialInstruction}</p>
      {preparation !== "1" && heatingInstructions?.microwave && (
        <p style={{ fontSize }} className="microwave_text">
          <img alt="" src="/img/label/microwave-90.svg" />
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
