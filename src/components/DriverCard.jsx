import Rating from "./Rating";
export default function DriverCard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <Rating>{props.rating}</Rating>
      <img src={props.img} alt="Driver" />
      <div>
        <p>Car:</p>
        <p>Model: {props.car.model}</p>
        <p>License Plate: {props.car.licensePlate}</p>
      </div>
    </div>
  );
}
