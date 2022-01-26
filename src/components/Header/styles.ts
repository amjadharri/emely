import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  background-color: #f5f5f5;
  height: 48px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.h1`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  font-family: sans-serif;
  margin: 0;
`;

export const Close = styled.div`
  position: absolute;
  font-size: 18px;
  top: 12px;
  right: 12px;
  background-color: #ddd;
  border-radius: 100px;
  height: 20px;
  width: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
