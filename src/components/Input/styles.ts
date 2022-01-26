import React from "react";
import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const StyledInput = styled.input`
  flex: 1;
  height: 35px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 5px;
  border: #bebec2 1px solid;
  &:focus {
    border-color: #885fff;
  }
  &:focus-visible {
    outline: none;
  }
`;

export const StyledInputRight = styled.div`
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  position: absolute;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: #bebec2 1px solid;
  bottom: 0;
  right: 0;
  top: 0;
`;

export const Error = styled.p`
  color: red;
`;
