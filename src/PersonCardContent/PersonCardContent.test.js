import { shallow } from "enzyme";
import React from "react";
import { mockedPersonOne } from "../mockData";
import PersonCardContent from "./PersonCardContent";

const renderComponent = person => {
  return shallow(<PersonCardContent person={person} />);
};

describe("PersonCardContent", () => {
  const basicComponent = renderComponent(mockedPersonOne);
  it("renders without crashing", () => {
    expect(basicComponent.exists()).toBe(true);
  });

  it("renders 12 li tags", () => {
    expect(basicComponent.find("li")).toHaveLength(12);
  });

  describe("renders proper values", () => {
    it("renders proper name value", () => {
      expect(basicComponent.find("#name").text()).toEqual(
        `Name: ${mockedPersonOne.name}`
      );
    });

    it("renders proper height value", () => {
      expect(basicComponent.find("#height").text()).toEqual(
        `Height: ${mockedPersonOne.height}`
      );
    });

    it("renders proper mass value", () => {
      expect(basicComponent.find("#mass").text()).toEqual(
        `Mass: ${mockedPersonOne.mass}`
      );
    });

    it("renders proper hair color value", () => {
      expect(basicComponent.find("#hair_color").text()).toEqual(
        `Hair color: ${mockedPersonOne.hair_color}`
      );
    });
    it("renders proper skin color value", () => {
      expect(basicComponent.find("#skin_color").text()).toEqual(
        `Skin color: ${mockedPersonOne.skin_color}`
      );
    });
    it("renders proper eye color value", () => {
      expect(basicComponent.find("#eye_color").text()).toEqual(
        `Eye color: ${mockedPersonOne.eye_color}`
      );
    });
    it("renders proper birth year value", () => {
      expect(basicComponent.find("#birth_year").text()).toEqual(
        `Birth year: ${mockedPersonOne.birth_year}`
      );
    });
    it("renders proper gender value", () => {
      expect(basicComponent.find("#gender").text()).toEqual(
        `Gender: ${mockedPersonOne.gender}`
      );
    });
    it("renders proper films number", () => {
      expect(basicComponent.find("#films").text()).toEqual(
        `Number of films: ${mockedPersonOne.films.length}`
      );
    });
    it("renders proper species number", () => {
      expect(basicComponent.find("#species").text()).toEqual(
        `Number of species: ${mockedPersonOne.species.length}`
      );
    });
    it("renders proper vehicles number", () => {
      expect(basicComponent.find("#vehicles").text()).toEqual(
        `Number of vehicles: ${mockedPersonOne.vehicles.length}`
      );
    });
    it("renders proper starships number", () => {
      expect(basicComponent.find("#starships").text()).toEqual(
        `Number of starships: ${mockedPersonOne.starships.length}`
      );
    });
  });
});
