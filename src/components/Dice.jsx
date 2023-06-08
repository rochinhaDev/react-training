import { useState } from "react";

const Dice = () => {
  const [diceImage, setDiceImage] = useState("../src/assets/images/dice-empty.png");

  const handleClick = () => {
    setDiceImage("../src/assets/images/dice-empty.png");

    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 6) + 1;
      setDiceImage(`../src/assets/images/dice${randomNum}.png`);
    }, 1000);
  };

  return <img src={diceImage} alt="Dice" onClick={handleClick} />;
};

export default Dice;
