export default function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const formattedNumber = number.slice(-4).padStart(number.length, "*");

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: color,
        padding: "20px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>{type}</h2>
      <p>{formattedNumber}</p>
      <p>
        Expires {expirationMonth}/{expirationYear}
      </p>
      <p>{bank}</p>
      <p>{owner}</p>
    </div>
  );
}
