import { shallow } from "enzyme";
import React from "react";
import Button from "./Button";

const renderComponent = (text, onClick) => {
  return shallow(<Button text={text} onClick={onClick} />);
};

describe("ScoreTable", () => {
  const mockedOnClick = jest.fn();
  const basicComponent = renderComponent("text", mockedOnClick);
  //TODO: test for text
  it("fires onclick funtion", () => {
    basicComponent.simulate("click");
    expect(mockedOnClick).toHaveBeenCalled();
  });
});
