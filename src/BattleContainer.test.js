import { shallow, mount } from "enzyme";
import React from "react";
import BattleContainer from "./BattleContainer";
import { mockedPeopleData, mockedStarshipsData } from "./mockData";
import ScoreTable from "./ScoreTable";
import Button from "./Button";
import CardsContainer from "./CardsContainer";

const renderComponent = (peopleData, starshipsData) => {
  return mount(
    <BattleContainer peopleData={peopleData} starshipsData={starshipsData} />
  );
};

describe("Battle Container", () => {
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation(init => [init, setState]);
  let basicComponent;

  beforeEach(() => {
    basicComponent = renderComponent(mockedPeopleData, mockedStarshipsData);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    expect(basicComponent.find("div.battleContainer").exists()).toBe(true);
  });

  it("renders welcome header", () => {
    expect(basicComponent.find("h1").text()).toEqual(
      "Welcome to the space battle"
    );
  });

  it("renders data availability info", () => {
    expect(basicComponent.find("#dataAvailability").text()).toEqual(
      `There are ${mockedPeopleData.length} people and ${mockedStarshipsData.length} starships ready for the battle`
    );
  });

  it("renders buttons section", () => {
    expect(basicComponent.find(".buttonsSection").exists()).toBe(true);
  });
  it("renders two buttons to play people or starships", () => {
    expect(basicComponent.find(Button)).toHaveLength(2);
    expect(
      basicComponent
        .find(Button)
        .at(0)
        .prop("text")
    ).toEqual(`PLAY PEOPLE`);
    expect(
      basicComponent
        .find(Button)
        .at(1)
        .prop("text")
    ).toEqual(`PLAY STARSHIPS`);
  });

  it("does not render cards container", () => {
    expect(basicComponent.find(CardsContainer).exists()).toBe(false);
  });

  it("renders score table", () => {
    expect(basicComponent.find(ScoreTable).exists()).toBe(true);
  });
});
