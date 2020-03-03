import { act } from "@testing-library/react";
import { shallow } from "enzyme";
import React from "react";
import BattleContainer from "./BattleContainer";
import Button from "./Button";
import CardsContainer from "./CardsContainer";
import { mockedPeopleData, mockedStarshipsData } from "./mockData";
import ScoreTable from "./ScoreTable";

const renderComponent = (peopleData, starshipsData) => {
  return shallow(
    <BattleContainer peopleData={peopleData} starshipsData={starshipsData} />
  );
};

describe("Battle Container", () => {
  const basicComponent = renderComponent(mockedPeopleData, mockedStarshipsData);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders properly", () => {
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

  it("does not render play again button", () => {
    expect(
      basicComponent
        .find({ id: "play-again" })
        .find(Button)
        .exists()
    ).toBe(false);
  });

  it("does not render cards container", () => {
    expect(basicComponent.find(CardsContainer).exists()).toBe(false);
  });

  it("renders score table", () => {
    expect(basicComponent.find(ScoreTable).exists()).toBe(true);
  });

  describe("on pick people button click", () => {
    const component = renderComponent(mockedPeopleData, mockedStarshipsData);

    act(() => {
      const pickPeopleButton = component.find({ id: "people" }).find(Button);
      pickPeopleButton.props().onClick();
    });

    it("renders battle container after choosing the people battle type", () => {
      expect(component.find(CardsContainer).exists()).toBe(true);
    });

    it("set battle type to people", () => {
      expect(component.find(CardsContainer).prop("battleData")).toHaveProperty(
        "type",
        "people"
      );
    });

    it("renders play again button", () => {
      const playAgainButton = component.find({ id: "play-again" }).find(Button);
      expect(playAgainButton.exists()).toBe(true);
    });
  });

  describe("on pick starships button click", () => {
    const component = renderComponent(mockedPeopleData, mockedStarshipsData);

    act(() => {
      const pickStarshipsButton = component
        .find({ id: "starships" })
        .find(Button);
      pickStarshipsButton.props().onClick();
    });

    it("renders battle container after choosing the people battle type", () => {
      expect(component.find(CardsContainer).exists()).toBe(true);
    });

    it("sets battle type to starships", () => {
      expect(component.find(CardsContainer).prop("battleData")).toHaveProperty(
        "type",
        "starships"
      );
    });

    it("renders play again button", () => {
      const playAgainButton = component.find({ id: "play-again" }).find(Button);
      expect(playAgainButton.exists()).toBe(true);
    });
  });
});
