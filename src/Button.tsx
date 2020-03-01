import React from "react";

type ButtonProps = {
  text: any;
  onClick: any;
};

const Button: React.SFC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} type="button" data-testid="button">
      {text}
    </button>
  );
};

export default Button;
