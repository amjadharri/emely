import React from "react";
import { Header } from "../../components/Header";
import { Wrap } from "./styles";
import { LoginWithNear } from "../Home/styles";
import { Input } from "../../components/Input";
import { Section } from "../Home/styles";
import { Label, Align, Position, StyledButton } from "./styles";
import { Button } from "../../components/Button";
import { Content } from "../../components/Content";
import { Divider } from "../../components/Common/styles";
export const Create = () => {
  return (
    <Wrap>
      <Header text="Create NEAR account" onClose={() => null} />
      <Content>
        <p style={{ color: "#555" }}>
          Enter an account ID to use with your Near
          <br />
          account.Your Account I'd will be used for all
          <br />
          NEAR operations,including sending and
          <br />
          receiving assets.
        </p>
        <br />
        <Align>
          <Label>Full Name</Label>
          <br />
          <Input placeholder="Ex.John deo" />
          <br />
          <br />
          <Label>Account I'd</Label>
          <Input placeholder="Yourname" widthRightButton rightText=".near" />
        </Align>
        <Section>
          <Button text="Continue" />
        </Section>
        <Section>
          <Divider />
        </Section>
        <Section>
          <p style={{ color: "#555", fontSize: "12px" }}>
            By creating a NEAR account,You agree to the NEAR Wallet{" "}
            <a>Terms of Service</a> and <a>Privacy Policy</a>
          </p>
        </Section>
        <Section>
          <p>Already have NEAR account?</p>

          <LoginWithNear text="Login with Near" />
        </Section>
      </Content>
    </Wrap>
  );
};
