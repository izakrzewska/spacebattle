import React, { useState } from "react";
import CardsContainer from "./CardsContainer";
import ScoreTable from "./ScoreTable";
import {
  BattleContestants,
  BattleData,
  Contestant,
  ContestantType,
  Person,
  Score,
  Starship,
  ContestantValues,
  WinnerValues,
  ResultType
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
  const [gameWinner, setGameWinner] = useState<Contestant>();
  const [result, setResult] = useState<ResultType | undefined>();
  const [isWinnerKnown, setIsWinnerKnown] = useState<boolean>(false);
  const [score, setScore] = useState<Score>({ playerOne: 0, playerTwo: 0 });
  const [isTie, setIsTie] = useState<boolean>(false);

  const pickContestansNumbers = (type: ContestantType): number[] => {
    const maxValue: number =
      type === ContestantValues.PEOPLE
        ? peopleData.length
        : starshipsData.length;

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
    let battleContestants: BattleContestants = [];

    switch (type) {
      case ContestantValues.PEOPLE: {
        battleContestants = [
          peopleData[playerOneNumber],
          peopleData[playerTwoNumber]
        ];
        break;
      }
      case ContestantValues.STARSHIPS: {
        battleContestants = [
          starshipsData[playerOneNumber],
          starshipsData[playerTwoNumber]
        ];
        break;
      }
    }

    return battleContestants;
  };

  const getDataForTheBattle = (type: ContestantType): BattleData => {
    const contestantsNumbers: number[] = pickContestansNumbers(type);
    const battleContestants: BattleContestants = getContestants(
      type,
      contestantsNumbers
    );

    return { battleContestants, type };
  };

  const evaluateWinner = (
    playerOneValue: string,
    playerTwoValue: string
  ): ResultType => {
    if (getValue(playerOneValue) > getValue(playerTwoValue)) {
      setResult(WinnerValues.PLAYER_ONE);
      return WinnerValues.PLAYER_ONE;
    } else if (getValue(playerOneValue) < getValue(playerTwoValue)) {
      setResult(WinnerValues.PLAYER_TWO);
      return WinnerValues.PLAYER_TWO;
    } else {
      setResult(WinnerValues.TIE);
      return WinnerValues.TIE;
    }
  };

  const getValue = (value: string): number => {
    return value === "unknown" ? 1 : Number(value);
  };

  const updateScore = (result: ResultType | undefined): void => {
    switch (result) {
      case WinnerValues.PLAYER_ONE: {
        setScore({
          playerOne: score.playerOne + 1,
          playerTwo: score.playerTwo
        });
        break;
      }
      case WinnerValues.PLAYER_TWO: {
        setScore({
          playerOne: score.playerOne,
          playerTwo: score.playerTwo + 1
        });
        break;
      }
    }
  };

  const getWinner = (battleData: BattleData): void => {
    const { type, battleContestants } = battleData;

    switch (type) {
      case ContestantValues.PEOPLE: {
        const [playerOne, playerTwo] = [
          battleContestants[0] as Person,
          battleContestants[1] as Person
        ];

        const [playerOneMass, playerTwoMass] = [playerOne.mass, playerTwo.mass];

        evaluateWinner(playerOneMass, playerTwoMass);
        break;
      }
      case ContestantValues.STARSHIPS: {
        const [playerOne, playerTwo] = [
          battleContestants[0] as Starship,
          battleContestants[1] as Starship
        ];

        const [playerOneCrew, playerTwoCrew] = [playerOne.crew, playerTwo.crew];

        evaluateWinner(playerOneCrew, playerTwoCrew);
        break;
      }
    }

    switch (result) {
      case WinnerValues.PLAYER_ONE: {
        setGameWinner(battleContestants[0]);
        break;
      }
      case WinnerValues.PLAYER_TWO: {
        setGameWinner(battleContestants[1]);
        break;
      }
    }
    setIsWinnerKnown(true);
    updateScore(result);
  };

  const play = (type: ContestantType) => {
    const data: BattleData = getDataForTheBattle(type);
    setBattleData(data);
    getWinner(data);
  };

  const playAgain = (): void => {
    setBattleData(undefined);
    setIsWinnerKnown(false);
    setIsTie(false);
  };

  const dataAvailabilityInfo = `There are ${peopleData.length} people and ${starshipsData.length} starships ready for the battle`;

  const playAgainButton = (
    <button onClick={() => playAgain()}>PLAY AGAIN</button>
  );
  const pickBattleTypeButtons = (
    <>
      <button onClick={(): void => play(ContestantValues.PEOPLE)}>
        PLAY PEOPLE
      </button>
      <button onClick={(): void => play(ContestantValues.STARSHIPS)}>
        PLAY STARSHIPS
      </button>
    </>
  );

  return (
    <div>
      <h1>Welcome to the space battle</h1>
      <p>{dataAvailabilityInfo}</p>
      <div>{isWinnerKnown ? playAgainButton : pickBattleTypeButtons}</div>
      {!!battleData && (
        <CardsContainer battleData={battleData} gameWinner={gameWinner} />
      )}
      <ScoreTable isTie={isTie} score={score} />
    </div>
  );
};

export default BattleContainer;
