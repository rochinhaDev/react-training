import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [buttonColor, setButtonColor] = useState("purple");

  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleLikeClick = () => {
    const nextIndex = (colors.indexOf(buttonColor) + 1) % colors.length;
    setLikes(likes + 1);
    setButtonColor(colors[nextIndex]);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor, color: "white" }}
        onClick={handleLikeClick}
      >
        {likes} Likes
      </button>
    </div>
  );
}
