import { shallow } from "enzyme";
import React from "react";
import { mockedStore } from "../mockData";
import ScoreTable from "./ScoreTable";

const renderComponent = (score, isTie) => {
  return shallow(<ScoreTable score={score} isTie={isTie} />);
};

describe("ScoreTable", () => {
  const basicComponent = renderComponent(mockedStore, false);
  it("renders without crashing", () => {
    expect(basicComponent.find("div.scoreTable").exists()).toBe(true);
  });

  it("properly renders playerOne score", () => {
    expect(
      basicComponent
        .find("p")
        .at(0)
        .text()
    ).toEqual(`Player One score: ${mockedStore.playerOne}`);
  });

  it("properly renders playerTwo score", () => {
    expect(
      basicComponent
        .find("p")
        .at(1)
        .text()
    ).toEqual(`Player Two score: ${mockedStore.playerTwo}`);
  });

  describe("when isTie prop is set to false", () => {
    it("renders three paragraph tags", () => {
      expect(basicComponent.find("p")).toHaveLength(2);
    });
  });

  describe("when isTie prop is set to true", () => {
    it("renders two paragraph tags", () => {
      const wrapper = renderComponent(mockedStore, true);
      expect(wrapper.find("p")).toHaveLength(3);
    });
  });
});
