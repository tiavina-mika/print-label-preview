const Nutriscore = ({ nutriscore }) => {
  if (!nutriscore) return null;

  return (
    <article id="nutriscore_container">
      <img
        alt="nutriscore"
        id="nutriscore_image"
        src={`/img/label/nutriscore/FC__${nutriscore.toUpperCase()}_V2.png`}
      />
    </article>
  );
};

export default Nutriscore;
