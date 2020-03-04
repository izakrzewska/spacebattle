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

  return (
    <div className="cardsContainer">
      {battleContestants.map((contestant: Contestant, i: number) => (
        <ContestantCard
          key={i}
          type={type}
          contestant={contestant}
          isWinningCard={contestant === gameWinner}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
