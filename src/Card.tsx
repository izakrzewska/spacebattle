import React from "react";
import {
  Contestant,
  ContestantType,
  Person,
  Starship,
  ContestantValues
} from "./types";
import PersonCardContent from "./PersonCardContent";
import StarshipCardContent from "./StarshipCardContent";

type CardProps = {
  contestant: Contestant;
  type: ContestantType;
  isWinningCard: boolean;
};

const Card: React.SFC<CardProps> = ({ contestant, type, isWinningCard }) => {
  let content;
  switch (type) {
    case ContestantValues.PEOPLE: {
      content = <PersonCardContent person={contestant as Person} />;
      break;
    }
    case ContestantValues.STARSHIPS: {
      content = <StarshipCardContent starship={contestant as Starship} />;
      break;
    }
  }

  return (
    <div>
      <p>{isWinningCard && "THIS IS A WINNING CARD!"}</p>
      <ul>{content}</ul>
    </div>
  );
};

export default Card;
