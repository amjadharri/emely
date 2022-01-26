import React from "react";
import { Wrap } from "./styles";

interface IProps {
  text?: string;
  onClick?: () => void;
  style?: any;
  className?: string;
  rightButton?: boolean;
}

export const Button: React.FC<IProps> = (props) => {
  return (
    <Wrap
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    >
      {props.text}
    </Wrap>
  );
};
