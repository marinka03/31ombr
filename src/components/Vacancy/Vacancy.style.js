import styled from "styled-components";
import { theme } from "../../vars";

export const Section = styled.section`
  width: 100%;
  position: relative;
  background-color: #151a1a;
  padding: 50px 0;
`;
export const Title = styled.h2`
  font-size: 45px;
  margin-bottom: 50px;
  text-align: center;
  color: ${theme.color.light_summer};
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: max-content;
  margin: 50px auto;
  font-size: 24px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const HightImgWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2);
  grid-column-gap: 0px;
  grid-row-gap: 24px;

  font-size: 20px;
  @media (min-width: ${theme.breakpoint.md}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 24px;
    grid-row-gap: 0px;
  }
`;

export const HightImg = styled.img`
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  @media (min-width: 500px) {
    width: 350px;
  }
  @media (min-width: ${theme.breakpoint.xl}) {
    width: 600px;
  }
`;

export const LowerImgWrap = styled.div`
  position: relative;
  right: 0;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2);
  grid-column-gap: 0px;
  grid-row-gap: 24px;

  font-size: 20px;
  @media (min-width: ${theme.breakpoint.md}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 24px;
    grid-row-gap: 0px;
  }
`;

export const LowerImg = styled.img`
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  @media (min-width: 500px) {
    width: 350px;
    bottom: 50px;
    right: 10%;
  }
`;

export const JoinWrapper = styled.div`
  text-align: center;
  :hover {
    background-color: ${theme.color.button_light_hover};
  }
`;

export const ThirdTitle = styled.h3`
  font-size: 32px;
  color: ${theme.color.button_light_hover};
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
