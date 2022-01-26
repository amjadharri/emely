import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";

export const Label = styled.label`
  color: #6f6e73;
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Align = styled.div`
  width: 100%;
`;
export const Position = styled.div`
  position: relative;
  height: 100px;
  width: 100%;
`;
export const StyledButton = styled(Button)`
  width: 50px;
  position: absolute;
  top: 0;
  right: 0;
`;
