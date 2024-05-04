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
} from "./Vacancy.style";

function Vacancy({ vacancyData }) {
  const { categorys, title } = vacancyData;
  return (
    <Section id="Vacancy">
      <div className="container">
        <Title>{title}</Title>
        <HightImgWrap>
          <HightImg src={warfire} alt="Soldier" />
        </HightImgWrap>
        {/* <ListWrapper> */}
        <List>
          {categorys.map((item, idx) => (
            <Item key={idx}>
              <BsPlusCircleDotted />
              <h3>{item.title}</h3>
            </Item>
          ))}
        </List>
        {/* </ListWrapper> */}
        <LowerImgWrap>
          <LowerImg src={dron} alt="Soldier" />
        </LowerImgWrap>
      </div>
    </Section>
  );
}

export default Vacancy;
