const agreement = {
  FC: "94.071.002",
  SZ: "94.071.002",
  MP: "94.071.002"
};

const Agreement = ({
  brand = "FC",
  number,
  countryCode = "FR",
  continentCode = "CE"
}) => {
  return (
    <div id="agreement_container" className="bottom_right_containers">
      <svg version="1.1" viewBox="0 0 300 200" style={{ height: "100%" }}>
        <ellipse
          cx="150"
          cy="100"
          rx="140"
          ry="95"
          style={{
            fill: "transparent",
            stroke: "#000000",
            strokeWidth: 2,
            height: "6mm"
          }}
        />
        <text x="148" y="60" fontSize="40" textAnchor="middle" fill="#000000">
          {countryCode}
        </text>
        <text x="144" y="120" fontSize="40" textAnchor="middle" fill="#000000">
          {number || agreement[brand]}
        </text>
        <text x="148" y="180" fontSize="40" textAnchor="middle" fill="#000000">
          {continentCode}
        </text>
      </svg>
    </div>
  );
};

export default Agreement;
