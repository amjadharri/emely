import React from "react";
import { Wrap, StyledInput, StyledInputRight, Error } from "./styles";

interface IProps {
  placeholder?: string;
  className?: string;
  widthRightButton?: boolean;
  rightText?: string;
  isError?: boolean;
  errorText?: string;
  type?: "text" | "number";
}

export const Input: React.FC<IProps> = ({
  placeholder,
  className,
  widthRightButton,
  rightText,
  isError,
  errorText,
  type = "text",
}) => {
  return (
    <Wrap className={className}>
      <StyledInput
        className={className}
        style={{
          ...(isError && { borderColor: "red" }),
        }}
        type={type}
        placeholder={placeholder}
      />
      {widthRightButton && <StyledInputRight>{rightText}</StyledInputRight>}
      {isError && <Error>{errorText}</Error>}
    </Wrap>
  );
};
