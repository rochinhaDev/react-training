export default function Greetings(props) {
  console.log(props);
  return (
    <div>
      {props.lang === "de" && <p>Hallo </p>}
      {props.lang === "fr" && <p>Bonjour </p>}
      <p>{props.children}</p>
    </div>
  );
}
