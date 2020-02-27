import React, { useState } from "react";
// import Error from "./Error";
import CardsContainer from "./CardsContainer";
import BattleResult from "./BattleResult";
import {
  ContestantType,
  BattleContestants,
  BattleData,
  Contestant,
  Person,
  Starship
} from "./types";
import { getOneorZero, getRandomBetweenRange } from "./utils";

type BattleContainerProps = {
  peopleData: any;
  starshipsData: any;
};

const BattleContainer = ({
  peopleData,
  starshipsData
}: BattleContainerProps) => {
  const [battleData, setBattleData] = useState<BattleData>();
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [gameWinner, setWinner] = useState<Contestant | "TIE">();

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

  const getWinner = (battleData: BattleData): void => {
    const { type, battleContestants } = battleData;
    const getValue = (value: string): number => {
      return value === "Unknown" ? 0 : Number(value);
    };

    switch (type) {
      case "people": {
        const playerOne = battleContestants[0] as Person;
        const playerTwo = battleContestants[1] as Person;

        if (getValue(playerOne.mass) > getValue(playerTwo.mass)) {
          setWinner(playerOne);
        } else if (getValue(playerOne.mass) < getValue(playerTwo.mass)) {
          setWinner(playerTwo);
        } else {
          setWinner("TIE");
        }

        return;
      }
      case "starships": {
        const playerOne = battleContestants[0] as Starship;
        const playerTwo = battleContestants[1] as Starship;
        if (getValue(playerOne.crew) > getValue(playerTwo.crew)) {
          setWinner(playerOne);
        } else if (getValue(playerOne.crew) < getValue(playerTwo.crew)) {
          setWinner(playerTwo);
        } else {
          setWinner("TIE");
        }

        return;
      }
    }
  };

  function play() {
    setIsGameStarted(true);
    const data = getDataForTheBattle();
    setBattleData(data);
    getWinner(data);
  }

  return (
    <div>
      <h2>{`There are ${peopleData.length} people and ${starshipsData.length} starships ready for the battle`}</h2>
      <button onClick={(): void => play()}>
        {!isGameStarted ? "PLAY" : "PLAY AGAIN"}
      </button>
      {isGameStarted && (
        <>
          {!!battleData && <CardsContainer battleData={battleData} />}
          {!!gameWinner && <BattleResult gameWinner={gameWinner} />}
        </>
      )}
    </div>
  );
};

export default BattleContainer;
