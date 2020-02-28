import React, { useEffect, useState } from "react";
import Card from "./Card";
import { BattleData, Contestant, Person, Starship, Winner } from "./types";

type CardsContainerProps = {
  battleData: BattleData;
  isWinnerKnownHandler: (value: boolean) => void;
};

const CardsContainer: React.SFC<CardsContainerProps> = ({
  battleData,
  isWinnerKnownHandler
}) => {
  const [gameWinner, setGameWinner] = useState<Winner>();
  const { battleContestants, type } = battleData;

  const getWinner = (battleData: BattleData): void => {
    const { type, battleContestants } = battleData;
    const getValue = (value: string): number => {
      return value === "unknown" ? 1 : Number(value);
    };

    const evaluateWinner = (
      playerOneValue: string,
      playerTwoValue: string
    ): string => {
      if (getValue(playerOneValue) > getValue(playerTwoValue)) {
        return "playerOne";
      } else if (getValue(playerOneValue) < getValue(playerTwoValue)) {
        return "playerTwo";
      } else {
        return "TIE";
      }
    };

    const setWinner = (
      playerOne: Contestant,
      playerTwo: Contestant,
      result: string
    ): void => {
      result === "playerOne" && setGameWinner(playerOne);
      result === "playerTwo" && setGameWinner(playerTwo);
      result === "TIE" && setGameWinner("TIE");
    };

    let result;

    switch (type) {
      case "people": {
        const [playerOne, playerTwo] = [
          battleContestants[0] as Person,
          battleContestants[1] as Person
        ];

        const [playerOneMass, playerTwoMass] = [playerOne.mass, playerTwo.mass];

        result = evaluateWinner(playerOneMass, playerTwoMass);
        setWinner(playerOne, playerTwo, result);

        break;
      }
      case "starships": {
        const [playerOne, playerTwo] = [
          battleContestants[0] as Starship,
          battleContestants[1] as Starship
        ];

        const [playerOneCrew, playerTwoCrew] = [playerOne.crew, playerTwo.crew];

        result = evaluateWinner(playerOneCrew, playerTwoCrew);
        setWinner(playerOne, playerTwo, result);
        break;
      }
    }

    isWinnerKnownHandler(true);
  };

  useEffect(() => {
    getWinner(battleData);
  });

  const checkIfWinner = (contestant: Contestant): boolean => {
    if (gameWinner === contestant) {
      return true;
    }
    return false;
  };

  const tieInfo = "It is a tie, play again!";

  return (
    <div>
      <div>
        {battleContestants.map((contestant: Contestant, i: number) => (
          <Card
            key={i}
            type={type}
            contestant={contestant}
            isWinningCard={checkIfWinner(contestant)}
          />
        ))}
      </div>
      <div>{gameWinner === "TIE" && tieInfo}</div>
    </div>
  );
};

export default CardsContainer;
