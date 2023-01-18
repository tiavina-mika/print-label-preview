import { Fragment } from "react";
import { getFontSizesByCharCount, minTommss } from "../utils/utils";

const SpecialInstructions = ({
  specialInstruction,
  heatingInstructions,
  preparation
}) => {
  console.log("cc", getFontSizesByCharCount(specialInstruction, 50, [2, 10]));
  return (
    <article id="special_instruction_container">
      <p
        style={{
          fontSize:
            getFontSizesByCharCount(specialInstruction, 50, [8, 10]) + "px"
        }}
      >
        {specialInstruction}
        {preparation !== "1" && heatingInstructions?.microwave && (
          <Fragment>
            <br />
            <img alt="" src="/img/label/microwave-90.svg" />
            {heatingInstructions.microwave.instructions}
            &nbsp;(
            {`${minTommss(heatingInstructions.microwave.duration)} ; ${
              heatingInstructions.microwave.power
            } Watt`}
            )
          </Fragment>
        )}
      </p>
    </article>
  );
};

export default SpecialInstructions;
