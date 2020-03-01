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
import { Card, CardHeader, CardContent } from "@material-ui/core";
import "./ContestantCard.css";

type ContestantCardProps = {
  contestant: Contestant;
  type: ContestantType;
  isWinningCard: boolean;
};

const ContestantCard: React.SFC<ContestantCardProps> = ({
  contestant,
  type,
  isWinningCard
}) => {
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
    <Card>
      <CardHeader title={isWinningCard && "THIS IS A WINNING CARD!"} />
      <CardContent>
        <ul className="list">{content}</ul>
      </CardContent>
    </Card>
  );
};

export default ContestantCard;
