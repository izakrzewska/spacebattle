import React from "react";
import { Score } from "./types";
import "./ScoreTable";

type ScoreTableProps = {
  score: Score;
  isTie: boolean;
};

const ScoreTable: React.SFC<ScoreTableProps> = ({ score, isTie }) => {
  return (
    <div className="scoreTable">
      <p>Player One score: {score.playerOne}</p>
      <p>Player Two score: {score.playerTwo}</p>
      {isTie && <p>It is a tie, play again!</p>}
    </div>
  );
};

export default ScoreTable;
