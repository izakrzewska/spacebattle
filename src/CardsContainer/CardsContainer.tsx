import React from "react";
import ContestantCard from "../ContestantCard/ContestantCard";
import { BattleData, Contestant } from "../types";
import "./CardsContainer.css";

type CardsContainerProps = {
  battleData: BattleData;
  gameWinner: Contestant | null;
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
    <div className="cardsContainer">
      {battleContestants.map((contestant: Contestant, i: number) => (
        <ContestantCard
          key={i}
          type={type}
          contestant={contestant}
          isWinningCard={checkIfWinner(contestant)}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
