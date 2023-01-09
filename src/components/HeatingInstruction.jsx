import { minTommss } from "../utils/utils";

const HeatingInstruction = ({ heatingInstructions, preparation }) => {
  if (!(preparation !== "1" && heatingInstructions?.microwave)) return null;

  return (
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
  );
};

// const HeatingInstruction = ({ heatingInstructions, preparation }) => {
//     return (
//       <article id="heating_instruction_container">
//         <p>
//           <img alt="" src="/img/label/microwave-90.svg" />
//           Retirez le couvercle avant de réchauffer (2’30 ; 900 Watt)
//         </p>
//       </article>
//     )
// };

export default HeatingInstruction;
