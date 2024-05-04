import React from "react";
import {
  Section,
  Content,
  List,
  JoinWrapper,
  Title,
  ThirdTitle,
  Text
} from "./OurValues.style";
import Join from "../Join";

function OurValues({ ourValuesData }) {
  const { categorys, title } = ourValuesData;
  return (
    <Section id="OurValues">
      <div className="container">
        <Content>
          <Title>{title}</Title>
          <List>
            {categorys.map((item, idx) => (
              <li key={idx}>
                <div>
                  <ThirdTitle>{item.title}</ThirdTitle>
                  <Text>{item.text}</Text>
                </div>
              </li>
            ))}
          </List>
          <JoinWrapper>
            <Join />
          </JoinWrapper>
        </Content>
      </div>
    </Section>
  );
}

export default OurValues;
