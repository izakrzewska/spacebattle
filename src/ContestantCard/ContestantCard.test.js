import { Card, CardContent, CardHeader } from "@material-ui/core";
import { shallow } from "enzyme";
import React from "react";
import ContestantCard from "./ContestantCard";
import { mockedPersonOne, mockedStarshipOne } from "../mockData";
import PersonCardContent from "../PersonCardContent/PersonCardContent";
import StarshipCardContent from "../StarshipCardContent/StarshipCardContent";

const renderComponent = (contestant, type, isWinningCard) => {
  return shallow(
    <ContestantCard
      contestant={contestant}
      type={type}
      isWinningCard={isWinningCard}
    />
  );
};

describe("Contestant Card", () => {
  const basicComponent = renderComponent(mockedPersonOne, "people", false);
  let component;
  it("renders all the card components", () => {
    expect(basicComponent.find(Card).exists()).toBe(true);
    expect(basicComponent.find(CardHeader).exists()).toBe(true);
    expect(basicComponent.find(CardContent).exists()).toBe(true);
  });

  it("renders ul element", () => {
    expect(basicComponent.find("ul.list").exists()).toBe(true);
  });

  it("renders info in case of undefined contestant", () => {
    component = renderComponent(undefined, "people", false);
    expect(component.find("p").text()).toEqual(
      "Sorry, something went wrong. Play again."
    );
  });

  describe("isWinningCard prop", () => {
    describe("when the card wins the game", () => {
      it("renders card header with the proper information", () => {
        component = renderComponent(mockedPersonOne, "people", true);
        const header = component.find(CardHeader);
        expect(header.prop("title")).toEqual("WINNER");
      });
    });

    describe("when the card does not win the game", () => {
      it("renders empty card header", () => {
        component = renderComponent(mockedPersonOne, "people", false);
        const header = component.find(CardHeader);
        expect(header.props().title).toEqual(false);
      });
    });
  });

  describe("type prop", () => {
    describe("when type prop is equal to people", () => {
      it("renders PersonCardContent", () => {
        expect(basicComponent.find(PersonCardContent).exists()).toBe(true);
      });
      it("does not render StarshipCardContent", () => {
        expect(basicComponent.find(StarshipCardContent).exists()).toBe(false);
      });
    });
    describe("when type prop is equal to starships", () => {
      const starshipComponent = renderComponent(
        mockedStarshipOne,
        "starships",
        false
      );
      it("renders StarshipCardContent", () => {
        expect(starshipComponent.find(StarshipCardContent).exists()).toBe(true);
      });
      it("does not render PersonCardContent", () => {
        expect(starshipComponent.find(PersonCardContent).exists()).toBe(false);
      });
    });
  });
});
