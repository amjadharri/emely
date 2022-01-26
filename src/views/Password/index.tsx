import React from "react";
import { Header } from "../../components/Header";
import { Wrap, Label } from "./styles";
import { Content } from "../../components/Content";

import { Button } from "../../components/Button";
import { StyledInput, StyledInputRight } from "../../components/Input/styles";
import { Input } from "../../components/Input";
import { Section } from "../../components/Common/styles";
export const Password = () => {
  return (
    <>
      <Wrap>
        <Header text="Secure Your account" onClose={() => null} />
        <Content>
          <p>
            Keep your apps safe from other with access to <br /> your computer
          </p>
          <Section style={{ textAlign: "left" }}>
            <Label>Password</Label>
            <Input />
          </Section>
          <Section style={{ textAlign: "left" }}>
            <Label>Confirm Password</Label>
            <Input />
          </Section>
          <Section>
            <Button text="Continue" />
          </Section>
          <Section>
            <p>TestTask@MetaPool.app</p>
            <p style={{ color: "#555", fontSize: "12px" }}>
              By creating a NEAR account,You agree to the NEAR Wallet{" "}
              <a>Terms of Service</a> and <a>Privacy Policy</a>
            </p>
          </Section>
        </Content>
      </Wrap>
    </>
  );
};
