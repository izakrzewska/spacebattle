import React, { useState } from "react";
// import Error from "./Error";
import CardsContainer from "./CardsContainer";
import { contestantType } from "./types";

type BattleViewProps = {
  peopleData: any;
  starshipsData: any;
};

const BattleView = ({ peopleData, starshipsData }: BattleViewProps) => {
  const [type, setType] = useState<contestantType>();
  const [contestantsNumbers, setContestantsNumbers] = useState<number[]>();
  const [playerOne, setPlayerOne] = useState();
  const [playerTwo, setPlayerTwo] = useState();

  console.log(peopleData, "peeeeople daa");
  console.log(starshipsData, "starshios daadasdasdasd");

  const pickType = (): void => {
    return Math.round(Math.random()) === 0
      ? setType("people")
      : setType("starships");
  };

  const getRandomBetweenRange = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getContestantsNumbers = (): void => {
    const maxValue: number =
      type === "people" ? peopleData.length : starshipsData.length;
    const numbers: number[] = [
      getRandomBetweenRange(1, maxValue),
      getRandomBetweenRange(1, maxValue)
    ];
    setContestantsNumbers(numbers);
  };

  const getContestants = () => {
    getContestantsNumbers();
    setPlayerOne(contestantsNumbers && contestantsNumbers[0]);
    setPlayerTwo(contestantsNumbers && contestantsNumbers[1]);
  };

  const startGame = () => {
    pickType();
    type && getContestants();
  };

  return (
    <div>
      <h2>{`There are ${peopleData.length} people and ${starshipsData.length} starships ready for the battle`}</h2>
      <button onClick={() => startGame()}>Start a game</button>
      {type && <h3>{`This is a ${type} battle`}</h3>}
      <CardsContainer playerOne={playerOne} playerTwo={playerTwo} />
    </div>
  );
};

export default BattleView;
