import React from "react";
import {
  Section,
  Content,
  List,
  Title,
  ThirdTitle,
  Text,
} from "./OurValues.style";

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
        </Content>
      </div>
    </Section>
  );
}

export default OurValues;
