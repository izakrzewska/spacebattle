import { shallow } from "enzyme";
import React from "react";
import Button from "./Button";

const renderComponent = (text, onClick) => {
  return shallow(<Button text={text} onClick={onClick} />);
};

describe("Button", () => {
  const mockedOnClick = jest.fn();
  const mockedText = "mocked Text";
  const basicComponent = renderComponent(mockedText, mockedOnClick);

  it("fires onclick funtion when clicked", () => {
    basicComponent.simulate("click");
    expect(mockedOnClick).toHaveBeenCalled();
  });

  it("sets text inside the button", () => {
    expect(basicComponent.find("button").text()).toEqual(mockedText);
  });
});
