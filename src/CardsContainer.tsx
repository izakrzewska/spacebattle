import React from "react";
import Card from "./Card";
import "./CardsContainer.css";
import { BattleData, Contestant } from "./types";

type CardsContainerProps = {
  battleData: BattleData;
  gameWinner: Contestant | undefined;
};

const CardsContainer: React.SFC<CardsContainerProps> = ({
  battleData,
  gameWinner
}) => {
  const { battleContestants, type } = battleData;

  const checkIfWinner = (contestant: Contestant): boolean => {
    if (gameWinner === contestant) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <div className="cardsContainer">
        {battleContestants.map((contestant: Contestant, i: number) => (
          <Card
            key={i}
            type={type}
            contestant={contestant}
            isWinningCard={checkIfWinner(contestant)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
