const DLC = ({ dlc, lotNumber }) => {
  return (
    <article id="dlc_container" className="bottom_right_containers">
      <p className="product_label">Consommer jusqu'au :</p>
      <p className="product_value">
        {dlc} <span className="lotNumber">({lotNumber})</span>
      </p>
    </article>
  );
};

export default DLC;
