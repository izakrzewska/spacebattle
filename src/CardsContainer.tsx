import React from "react";

type CardsContainerProps = {
  playerOne: any;
  playerTwo: any;
};

const CardsContainer = ({ playerOne, playerTwo }: CardsContainerProps) => {
  console.log(playerOne);
  console.log(playerTwo);

  return (
    <div>
      <h2>Elo</h2>
      <h3>Elo</h3>
    </div>
  );
};

export default CardsContainer;
