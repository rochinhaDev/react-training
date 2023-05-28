export default function Rating(props) {
  const rating = parseFloat(props.children);
  const fullStars = Math.floor(rating);

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index}>{index < fullStars ? "★" : "☆"}</span>
    ));
  };

  return <div>{renderStars()}</div>;
}
