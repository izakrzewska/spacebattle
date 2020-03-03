import React from "react";
import ContestantCard from "../ContestantCard/ContestantCard";
import "./CardsContainer.css";
import { BattleData, Contestant } from "../types";

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
