export default function IdCard(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.lastName}</h1>
      <p>{props.firstName}</p>
      <p>{props.gender}</p>
      <p>{props.height}</p>
      <p>{props.birth}</p>
      <img src={props.picture} alt="" />
    </div>
  );
}
