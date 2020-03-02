import React from "react";

type ButtonProps = {
  text: any;
  onClick: any;
  id?: string;
};

const Button: React.SFC<ButtonProps> = ({ text, onClick, id }) => (
  <button id={id} onClick={onClick} type="button">
    {text}
  </button>
);

export default Button;
