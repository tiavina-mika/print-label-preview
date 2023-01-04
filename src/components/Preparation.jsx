const Preparation = ({ specialInstruction }) => {
  return (
    <article id="preparation_container">
      {specialInstruction ? <p>{specialInstruction}</p> : null}
    </article>
  );
};

export default Preparation;
