import React from "react";
import { Score } from "./types";

type ScoreTableProps = {
  score: Score;
  isTie: boolean;
};

const ScoreTable: React.SFC<ScoreTableProps> = ({ score, isTie }) => {
  return (
    <div>
      <p>Player One score: {score.playerOne}</p>
      <p>Player Two score: {score.playerTwo}</p>
      <p> {isTie ? "It is a tie, play again!" : ""}</p>
    </div>
  );
};

export default ScoreTable;
