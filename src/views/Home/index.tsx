import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Divider, Flex } from "../../components/Common/styles";
import { Content } from "../../components/Content";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { LoginWithNear, Section } from "./styles";

export const Home = () => {
  const [isPhone, setIsPhone] = useState(true);

  return (
    <>
      <Header text="HomePage" />
      <Content>
        <Section>
          <Button
            style={{
              ...(!isPhone && {
                backgroundColor: "transparent",
                color: "#333",
              }),
              ...(isPhone && {
                backgroundColor: "transparent",
                color: "#333",
                border: "1px solid #BEBEC2",
              }),
            }}
            text="Phone"
            onClick={() => {
              setIsPhone(true);
            }}
          />
          <Button
            style={{
              ...(isPhone && { backgroundColor: "transparent", color: "#333" }),
              ...(!isPhone && {
                backgroundColor: "transparent",
                color: "#333",
                border: "1px solid #BEBEC2",
              }),
            }}
            text="Email"
            onClick={() => {
              setIsPhone(false);
            }}
          />
        </Section>
        <Section>
          {isPhone ? (
            <Input type="number" placeholder="Ex (337) 378 8383" />
          ) : (
            <Input placeholder="abc@email.com" />
          )}
        </Section>
        <Section>
          <Button text="Continue"></Button>
        </Section>
        <Section>
          <p>
            by clicking continue you must agree to near labs
            <a>Terms & Condition</a> and <a>Privacy Policy</a>
          </p>
        </Section>
        <Section>
          <Divider />
        </Section>
        <Section>
          <p>Already have NEAR account?</p>

          <LoginWithNear text="Login with Near" />
        </Section>
      </Content>
    </>
  );
};
