const Ecoscore = ({ ecoscore }) => {
  if (!ecoscore) return null;

  return (
    <article id="ecoscore_container" className="ecoscore">
      <img
        alt="ecoscore"
        id="ecoscore_image"
        src={`/img/label/ecoscore/Eco-Score-Contour-${ecoscore.toUpperCase()}-BL.svg`}
      />
    </article>
  );
};

export default Ecoscore;
