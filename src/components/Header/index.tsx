import React from "react";
import { Wrap, Heading, Close } from "./styles";

interface IProps {
  text: string;
  className?: string;
  onClose?: () => void;
}

export const Header: React.FC<IProps> = ({ text, className, onClose }) => {
  return (
    <Wrap>
      <Heading>{text}</Heading>
      {onClose && <Close>&times;</Close>}
    </Wrap>
  );
};
