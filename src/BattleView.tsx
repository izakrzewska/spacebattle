import React, { useState } from "react";
// import Error from "./Error";
import CardsContainer from "./CardsContainer";
import { ContestantType, BattleContestants, BattleData } from "./types";
import { getOneorZero, getRandomBetweenRange } from "./utils";

type BattleViewProps = {
  peopleData: any;
  starshipsData: any;
};

const BattleView = ({ peopleData, starshipsData }: BattleViewProps) => {
  const [battleData, setBattleData] = useState<BattleData>();
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);

  const pickType = (): ContestantType => {
    return getOneorZero() === 0 ? "people" : "starships";
  };

  const pickContestansNumbers = (type: ContestantType): number[] => {
    const maxValue: number =
      type === "people" ? peopleData.length : starshipsData.length;

    return [
      getRandomBetweenRange(1, maxValue),
      getRandomBetweenRange(1, maxValue)
    ];
  };

  const getContestants = (
    type: ContestantType,
    contestantsNumbers: number[]
  ): BattleContestants => {
    switch (type) {
      case "people": {
        return [
          peopleData[contestantsNumbers[0]],
          peopleData[contestantsNumbers[1]]
        ];
      }
      case "starships": {
        return [
          starshipsData[contestantsNumbers[0]],
          starshipsData[contestantsNumbers[1]]
        ];
      }
    }
  };

  const getDataForTheBattle = (): BattleData => {
    const type: ContestantType = pickType();
    const contestantsNumbers: number[] = pickContestansNumbers(type);
    const battleContestants = getContestants(type, contestantsNumbers);

    return { battleContestants, type };
  };

  function startGame() {
    console.log("GAMEEE ON");
    setIsGameStarted(true);
    setBattleData(getDataForTheBattle());
  }

  return (
    <div>
      <h2>{`There are ${peopleData.length} people and ${starshipsData.length} starships ready for the battle`}</h2>
      <button onClick={() => startGame()}>START</button>
      {isGameStarted && battleData && (
        <CardsContainer battleData={battleData} />
      )}
    </div>
  );
};

export default BattleView;
