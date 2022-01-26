import React from "react";
import { Wrap } from "./styles";

interface IProps {
  children?: any;
}

export const Content: React.FC<IProps> = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};
