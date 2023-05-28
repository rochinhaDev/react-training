export default function BoxColor(props) {
  const { r, g, b } = props;

  const color = `rgb(${r}, ${g}, ${b})`;
  const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)}`;

  const style = {
    backgroundColor: color,
    color: props.isWhiteText ? "white" : "black",
    padding: "20px",
    margin: "10px",
    textAlign: "center",
  };

  return (
    <div style={style}>
      <p>{color}</p>
      <p>{hex}</p>
    </div>
  );
}
