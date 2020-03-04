import { shallow } from "enzyme";
import React from "react";
import { mockedStarshipOne } from "../mockData";
import StarshipCardContent from "./StarshipCardContent";

const renderComponent = starship => {
  return shallow(<StarshipCardContent starship={starship} />);
};

describe("StarshipCardContent", () => {
  const basicComponent = renderComponent(mockedStarshipOne);
  it("renders without crashing", () => {
    expect(basicComponent.exists()).toBe(true);
  });

  it("renders 12 li tags", () => {
    expect(basicComponent.find("li")).toHaveLength(15);
  });

  describe("renders proper values", () => {
    it("renders proper name value", () => {
      expect(basicComponent.find("#name").text()).toEqual(
        `Name: ${mockedStarshipOne.name}`
      );
    });

    it("renders proper model value", () => {
      expect(basicComponent.find("#model").text()).toEqual(
        `Model: ${mockedStarshipOne.model}`
      );
    });

    it("renders proper manufacturer value", () => {
      expect(basicComponent.find("#manufacturer").text()).toEqual(
        `Manufacturer: ${mockedStarshipOne.manufacturer}`
      );
    });

    it("renders proper cost in credits value", () => {
      expect(basicComponent.find("#cost_in_credits").text()).toEqual(
        `Cost in credits: ${mockedStarshipOne.cost_in_credits}`
      );
    });
    it("renders proper length value", () => {
      expect(basicComponent.find("#length").text()).toEqual(
        `Length: ${mockedStarshipOne.length}`
      );
    });
    it("renders proper max atmosphering speed value", () => {
      expect(basicComponent.find("#max_atmosphering_speed").text()).toEqual(
        `Max atmosphering speed: ${mockedStarshipOne.max_atmosphering_speed}`
      );
    });
    it("renders proper crew value", () => {
      expect(basicComponent.find("#crew").text()).toEqual(
        `Crew: ${mockedStarshipOne.crew}`
      );
    });
    it("renders proper passengers value", () => {
      expect(basicComponent.find("#passengers").text()).toEqual(
        `Passengers: ${mockedStarshipOne.passengers}`
      );
    });
    it("renders proper cargo capacity value", () => {
      expect(basicComponent.find("#cargo_capacity").text()).toEqual(
        `Cargo capacity: ${mockedStarshipOne.cargo_capacity}`
      );
    });
    it("renders proper consumables value", () => {
      expect(basicComponent.find("#consumables").text()).toEqual(
        `Consumables: ${mockedStarshipOne.consumables}`
      );
    });
    it("renders proper hyperdrive rating value", () => {
      expect(basicComponent.find("#hyperdrive_rating").text()).toEqual(
        `Hyperdrive rating: ${mockedStarshipOne.hyperdrive_rating}`
      );
    });
    it("renders proper MGLT value", () => {
      expect(basicComponent.find("#MGLT").text()).toEqual(
        `MGLT: ${mockedStarshipOne.MGLT}`
      );
    });
    it("renders proper starship class value", () => {
      expect(basicComponent.find("#starship_class").text()).toEqual(
        `Starship class: ${mockedStarshipOne.starship_class}`
      );
    });

    it("renders proper pilots number", () => {
      expect(basicComponent.find("#pilots").text()).toEqual(
        `Number of pilots: ${mockedStarshipOne.pilots.length}`
      );
    });
    it("renders proper films number", () => {
      expect(basicComponent.find("#films").text()).toEqual(
        `Number of films: ${mockedStarshipOne.films.length}`
      );
    });
  });
});
