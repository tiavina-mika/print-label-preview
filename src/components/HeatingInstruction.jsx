import { minTommss } from "../utils/utils";

const HeatingInstruction = ({ heatingInstructions, preparation }) => {
  return preparation !== "1" && heatingInstructions?.microwave ? (
    <article id="heating_instruction_container">
      <p>
        Micro-ondes :{" "}
        <strong id="heating_instruction_microwave">
          {heatingInstructions.microwave.instructions}
        </strong>
        &nbsp;(
        {`${minTommss(heatingInstructions.microwave.duration)}, ${
          heatingInstructions.microwave.power
        } Watt`}
        )
      </p>
    </article>
  ) : null;
};

export default HeatingInstruction;
