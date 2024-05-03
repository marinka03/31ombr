import React from "react";
import { BattonWrap, Content, H1, Section } from "./MainSection.style";
import MainButton from "../MainButton/MainButton";

function MainSection() {
  return (
    <>
      <Section>
        <Content>
          <H1>31 окрема механізована бригада</H1>
        </Content>
        <BattonWrap>
          <MainButton />
        </BattonWrap>
      </Section>
    </>
  );
}

export default MainSection;
