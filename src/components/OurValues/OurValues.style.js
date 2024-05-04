import styled from "styled-components";
import { theme } from "../../vars";

export const Section = styled.section`
  width: 100%;
  position: relative;
  background-color: ${theme.color.dark};
  padding: 50px 0;
`;
export const Content = styled.div`
  border: 1px solid gray;
  padding: 0 50px 50px;
  border-radius: 2px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 24px;
  padding-bottom: 50px;

  @media (min-width: ${theme.breakpoint.md}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 24px;
  }
`;
export const JoinWrapper = styled.div`
  text-align: center;
  :hover {
    background-color: ${theme.color.button_light_hover};
  }
`;
export const Title = styled.h2`
  font-size: 45px;
  margin-bottom: 50px;
  padding-top: 50px;
  text-align: center;
  color: #f5eaca;
`;

export const ThirdTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 8px;
  color: orange;
`;

export const Text = styled.p`
  font-size: 20px;
`;
