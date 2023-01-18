import { minTommss } from "../utils/utils";

const SpecialInstructions = ({
  specialInstruction,
  heatingInstructions,
  preparation
}) => {
  return (
    <article id="preparation_container">
      {specialInstruction && <p>{specialInstruction}</p>}
      {preparation !== "1" && heatingInstructions?.microwave && (
        <article id="heating_instruction_container">
          <p>
            <img alt="" src="/img/label/microwave-90.svg" />
            {heatingInstructions.microwave.instructions}
            &nbsp;(
            {`${minTommss(heatingInstructions.microwave.duration)} ; ${
              heatingInstructions.microwave.power
            } Watt`}
            )
          </p>
        </article>
      )}
    </article>
  );
};

export default SpecialInstructions;
