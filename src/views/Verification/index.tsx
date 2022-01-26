import React from "react";
import { PP } from "./styles";
import { Header } from "../../components/Header";

import { PhoneInputs, AlignPhone, Wrap } from "./styles";
import { Button } from "../../components/Button";
import { Divider } from "../../components/Common/styles";
import { Content } from "../../components/Content";

export const Verification = () => {
  return (
    <>
      <Header text="Verification" onClose={() => null} />

      <Content>
        <PP>
          We've send a 60-digit verification code to the
          <br /> props
          <br />
          <br />
          <a>TestTask@gmail.com</a>
        </PP>
        <br />
        <p>Enter Verification code</p>
        <AlignPhone>
          <PhoneInputs />
          <PhoneInputs />
          <PhoneInputs />
          <PhoneInputs />
          <PhoneInputs />
          <PhoneInputs />
        </AlignPhone>
        <br />
        <Button text="Continue" />
        <br />

        <Divider />
        <br />
        <span>Dont Recive Your Code?</span>
        <br />
        <a>Send to a Different Email</a>
        <br />
        <a>Resend Your Code</a>
      </Content>
    </>
  );
};
