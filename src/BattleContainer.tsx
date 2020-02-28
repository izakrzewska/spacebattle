import React, { useState } from "react";
import CardsContainer from "./CardsContainer";
import {
  BattleContestants,
  BattleData,
  ContestantType,
  Person,
  Starship
} from "./types";
import { getRandomBetweenRange } from "./utils";

type BattleContainerProps = {
  peopleData: Person[];
  starshipsData: Starship[];
};

const BattleContainer: React.SFC<BattleContainerProps> = ({
  peopleData,
  starshipsData
}) => {
  const [battleData, setBattleData] = useState<BattleData>();
  const [isWinnerKnown, setIsWinnerKnown] = useState<boolean>(false);

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
    const playerOneNumber: number = contestantsNumbers[0];
    const playerTwoNumber: number = contestantsNumbers[1];

    switch (type) {
      case "people": {
        return [peopleData[playerOneNumber], peopleData[playerTwoNumber]];
      }
      case "starships": {
        return [starshipsData[playerOneNumber], starshipsData[playerTwoNumber]];
      }
    }
  };

  const getDataForTheBattle = (type: ContestantType): BattleData => {
    const contestantsNumbers: number[] = pickContestansNumbers(type);
    const battleContestants: BattleContestants = getContestants(
      type,
      contestantsNumbers
    );

    return { battleContestants, type };
  };

  const play = (type: ContestantType) => {
    const data: BattleData = getDataForTheBattle(type);
    setBattleData(data);
  };

  const isWinnerKnownHandler = (value: boolean): void => {
    setIsWinnerKnown(value);
  };

  const playAgain = (): void => {
    setBattleData(undefined);
    setIsWinnerKnown(false);
  };

  const dataAvailabilityInfo = `There are ${peopleData.length} people and ${starshipsData.length} starships ready for the battle`;
  const playAgainButton = (
    <button onClick={() => playAgain()}>PLAY AGAIN</button>
  );
  const pickBattleTypeButtons = (
    <>
      <button onClick={(): void => play("people")}>PLAY PEOPLE</button>
      <button onClick={(): void => play("starships")}>PLAY STARSHIPS</button>
    </>
  );

  return (
    <div>
      <h1>Welcome to the space battle</h1>
      <p>{dataAvailabilityInfo}</p>
      <div>{isWinnerKnown ? playAgainButton : pickBattleTypeButtons}</div>
      {!!battleData && (
        <CardsContainer
          battleData={battleData}
          isWinnerKnownHandler={isWinnerKnownHandler}
        />
      )}
    </div>
  );
};

export default BattleContainer;
