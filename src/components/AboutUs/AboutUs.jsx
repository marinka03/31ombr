import React from "react";
import {
  ContentWrap,
  ImageBackground,
  HeroImg,
  Title,
  Text,
} from "./AboutUs.style";
import img from "../../assets/soldiers.jpg";

function AboutUs({ aboutUsData }) {
  const { title, text } = aboutUsData;
  return (
    <section id="AboutUs">
      <div className="container">
        <Title>{title}</Title>
        <ContentWrap>
          <ImageBackground>
            <HeroImg src={img} alt="Art" />
          </ImageBackground>
          <Text>{text}</Text>
        </ContentWrap>
      </div>
    </section>
  );
}

export default AboutUs;
