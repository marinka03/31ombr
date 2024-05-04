import React from "react";
import { BattonWrap,HeroImg, Content, H1, Section } from "./MainSection.style";
import Join from "../Join/Join";
import img from "../../assets/bmwithflag.jpg"

function MainSection() {
  return (
    <>
      <Section>
        <HeroImg src={img} alt="military equipment" lang="en"/>
        <Content>
          <H1>31 окрема механізована бригада</H1>
        </Content>
        <BattonWrap>
          <Join />
        </BattonWrap>
      </Section>
    </>
  );
}

export default MainSection;
