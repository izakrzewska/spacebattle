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

  const updateScore = (result: ResultType): void => {
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

  const getGamewinner = (battleData: BattleData): void => {
    const { battleContestants } = battleData;

    const [playerOnePeople, playerTwoPeople] = [
      battleContestants[0] as Person,
      battleContestants[1] as Person
    ];

    const [playerOneStarships, playerTwoStarships] = [
      battleContestants[0] as Starship,
      battleContestants[1] as Starship
    ];

    const getValue = (value: string): number => {
      return value === "unknown" ? 0 : Number(value);
    };

    const playerOneValue =
      getValue(playerOnePeople.mass) || getValue(playerOneStarships.crew);
    const playerTwoValue =
      getValue(playerTwoPeople.mass) || getValue(playerTwoStarships.crew);

    if (playerOneValue > playerTwoValue) {
      updateScore(WinnerValues.PLAYER_ONE);
      setGameWinner(battleContestants[0]);
    } else if (playerOneValue < playerTwoValue) {
      updateScore(WinnerValues.PLAYER_TWO);
      setGameWinner(battleContestants[1]);
    } else {
      setIsTie(true);
    }

    setIsWinnerKnown(true);
  };

  const play = (type: ContestantType) => {
    const data: BattleData = getDataForTheBattle(type);
    setBattleData(data);
    getGamewinner(data);
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
