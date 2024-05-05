import React from "react";
import { BsPlusCircleDotted } from "react-icons/bs";
import warfire from "../../assets/warfire-flowers.jpg";
import dron from "../../assets/dron.jpg";

import {
  Section,
  Title,
  List,
  Item,
  HightImgWrap,
  HightImg,
  LowerImg,
  LowerImgWrap,
  JoinWrapper,
  ThirdTitle,
  Wrap,
} from "./Vacancy.style";
import LightJoin from "../LightJoin/LightJoin";

function Vacancy({ vacancyData }) {
  const { categorys, title, text_1, text_2 } = vacancyData;
  return (
    <Section id="Vacancy">
      <div className="container">
        <Title>{title}</Title>
        <HightImgWrap>
          <HightImg src={warfire} alt="Soldier" />
          <Wrap>
            <ThirdTitle>Кого ми шукаємо:</ThirdTitle>
            <p>{text_1}</p>
            <List>
              {categorys.map((item, idx) => (
                <Item key={idx}>
                  <BsPlusCircleDotted />
                  <h3>{item.title}</h3>
                </Item>
              ))}
            </List>
          </Wrap>
        </HightImgWrap>

        <LowerImgWrap>
          <Wrap>
            <ThirdTitle>
              Що робити якщо в переліку немає моєї спеціальності?
            </ThirdTitle>
            <p>{text_2}</p>
            <JoinWrapper>
              <LightJoin />
            </JoinWrapper>
          </Wrap>

          <LowerImg src={dron} alt="Soldier" />
        </LowerImgWrap>
      </div>
    </Section>
  );
}

export default Vacancy;
