const NetWeight = ({ netWeightKg }) => {
  const netWeight = 10 * Math.floor((netWeightKg * 1000) / 10);

  return (
    <article id="netweight_container" className="bottom_right_containers">
      <p className="product_label">Conserver entre 0 et +4°C</p>
      <p className="product_value" id="netweight_value">
        Poids net: {netWeight}g
      </p>
    </article>
  );
};

export default NetWeight;
