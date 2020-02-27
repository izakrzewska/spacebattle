import React from "react";
import { BattleData, Contestant } from "./types";
import Card from "./Card";

type CardsContainerProps = {
  battleData: BattleData;
};

const CardsContainer = ({ battleData }: CardsContainerProps) => {
  const { battleContestants, type } = battleData;
  return (
    <div>
      {battleContestants.map((contestant: Contestant, i: number) => (
        <Card key={i} type={type} contestant={contestant} />
      ))}
    </div>
  );
};

export default CardsContainer;
