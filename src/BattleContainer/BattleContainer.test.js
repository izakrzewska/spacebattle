import { act } from "@testing-library/react";
import { shallow } from "enzyme";
import React from "react";
import Button from "../Button/Button";
import CardsContainer from "../CardsContainer/CardsContainer";
import {
  mockedPeopleData,
  mockedPeopleTieContestants,
  mockedStarshipsData,
  mockedStarshipsTieContestants
} from "../mockData";
import ScoreTable from "../ScoreTable/ScoreTable";
import BattleContainer from "./BattleContainer";

const renderComponent = (peopleData, starshipsData) => {
  return shallow(
    <BattleContainer peopleData={peopleData} starshipsData={starshipsData} />
  );
};

const clickPeopleButton = component => {
  act(() => {
    const pickPeopleButton = component.find({ id: "people" }).find(Button);
    pickPeopleButton.props().onClick();
  });
};

const clickStarshipsButton = component => {
  act(() => {
    const pickStarshipsButton = component
      .find({ id: "starships" })
      .find(Button);
    pickStarshipsButton.props().onClick();
  });
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

  it("renders score table with 0 values", () => {
    expect(basicComponent.find(ScoreTable).exists()).toBe(true);
    expect(basicComponent.find(ScoreTable).prop("score")).toEqual({
      playerOne: 0,
      playerTwo: 0
    });
  });

  it("has a isTie prop set to false", () => {
    expect(basicComponent.find(ScoreTable).prop("isTie")).toBe(false);
  });

  describe("on pick people button click", () => {
    const component = renderComponent(mockedPeopleData, mockedStarshipsData);
    clickPeopleButton(component);

    it("renders battle container after choosing the people battle type", () => {
      expect(component.find(CardsContainer).exists()).toBe(true);
    });

    it("sets battle type to people", () => {
      expect(component.find(CardsContainer).prop("battleData")).toHaveProperty(
        "type",
        "people"
      );
    });

    it("updates the score", () => {
      expect(component.find(ScoreTable).prop("score")).not.toBe({
        playerOne: 0,
        playerTwo: 0
      });
    });

    it("renders play again button", () => {
      const playAgainButton = component.find({ id: "play-again" }).find(Button);
      expect(playAgainButton.exists()).toBe(true);
    });
  });

  describe("on pick starships button click", () => {
    const component = renderComponent(mockedPeopleData, mockedStarshipsData);
    clickStarshipsButton(component);

    it("renders battle container after choosing the people battle type", () => {
      expect(component.find(CardsContainer).exists()).toBe(true);
    });

    it("sets battle type to starships", () => {
      expect(component.find(CardsContainer).prop("battleData")).toHaveProperty(
        "type",
        "starships"
      );
    });

    it("updates the score", () => {
      expect(component.find(ScoreTable).prop("score")).not.toBe({
        playerOne: 0,
        playerTwo: 0
      });
    });

    it("renders play again button", () => {
      const playAgainButton = component.find({ id: "play-again" }).find(Button);
      expect(playAgainButton.exists()).toBe(true);
    });
  });

  describe("when there's a tie for people", () => {
    const component = renderComponent(
      mockedPeopleTieContestants,
      mockedStarshipsData
    );
    clickPeopleButton(component);

    it("does not update store", () => {
      expect(basicComponent.find(ScoreTable).prop("score")).toEqual({
        playerOne: 0,
        playerTwo: 0
      });
    });

    it("sets a tie for people and does not update score", () => {
      expect(component.find(ScoreTable).prop("isTie")).toBe(true);
    });
  });

  describe("when there's a tie for starships", () => {
    const component = renderComponent(
      mockedPeopleData,
      mockedStarshipsTieContestants
    );
    clickStarshipsButton(component);
    it("sets a tie for starships and does not update score", () => {
      expect(component.find(ScoreTable).prop("isTie")).toBe(true);
    });

    it("does not update the score", () => {
      expect(basicComponent.find(ScoreTable).prop("score")).toEqual({
        playerOne: 0,
        playerTwo: 0
      });
    });
  });
});
