import styled from "styled-components";
import { theme } from "../../vars";
import bgImg from "../../assets/green_smoke_background.jpg";

export const ContentWrap = styled.div`
  display: grid;
  grid-row-gap: 50px;
  padding-bottom: 50px;
  border-bottom: 3px solid ${theme.color.summer};
  margin-bottom: 50px;
  @media (min-width: ${theme.breakpoint.md}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 45px;
  }
`;
export const ImageBackground = styled.div`
  position: relative;
  height: 350px;
  background-color: black;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  filter: drop-shadow(2px 4px 6px black);
`;
export const HeroImg = styled.img`
  object-fit: cover;
  height: 300px;
  object-fit: cover;
  position: absolute;
  object-position: right;
  bottom: -32px;
  left: 16px;

  @media (min-width: 500px) {
    height: 330px;
    bottom: -12px;
    left: 16px;
  }
`;

export const Title = styled.h2`
  font-size: 45px;
  margin-bottom: 50px;
  text-align: center;
  color: ${theme.color.light_summer};
`;
export const Text = styled.p`
  font-size: 20px;
`;
