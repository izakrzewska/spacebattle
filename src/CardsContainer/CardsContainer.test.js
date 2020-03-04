import { shallow } from "enzyme";
import React from "react";
import CardsContainer from "./CardsContainer";
import ContestantCard from "../ContestantCard/ContestantCard";
import { mockedBattleData, mockedPersonOne } from "../mockData";

const renderComponent = (battleData, gameWinner) => {
  return shallow(
    <CardsContainer battleData={battleData} gameWinner={gameWinner} />
  );
};

describe("Cards Container", () => {
  const basicComponent = renderComponent(mockedBattleData, mockedPersonOne);

  it("renders without crashing with two contestant cards", () => {
    expect(basicComponent.find("div.cardsContainer").exists()).toBe(true);
  });

  it("renders two contestant cards", () => {
    expect(basicComponent.find(ContestantCard)).toHaveLength(2);
  });

  it("properly sets isWinningCard prop", () => {
    expect(
      basicComponent
        .find(ContestantCard)
        .at(0)
        .prop("isWinningCard")
    ).toEqual(true);

    expect(
      basicComponent
        .find(ContestantCard)
        .at(1)
        .prop("isWinningCard")
    ).toEqual(false);
  });
});
