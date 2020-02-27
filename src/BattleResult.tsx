import React from "react";
import { Contestant } from "./types";

type BattleResultProps = {
  gameWinner: Contestant | "TIE";
};

const BattleResult = ({ gameWinner }: BattleResultProps) => {
  return (
    <div>
      {gameWinner === "TIE"
        ? "It is a tie"
        : `The winner is: ${gameWinner.name}`}
    </div>
  );
};

export default BattleResult;
