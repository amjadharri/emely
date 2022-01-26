import React from "react";
import styled from "styled-components";
import { Input } from "../../components/Input";

export const PhoneInputs = styled(Input)`
  width: 20px;
  height: 30px;
`;

export const AlignPhone = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PP = styled.p`
  font-size: 14px;
  font-family: sans-serif;
  text-align: center;
`;
