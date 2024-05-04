import styled from "styled-components";
import img from "../../assets/bmwithflag.jpg";
import { theme } from "../../vars";

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  margin-bottom: 50px;
  /* background-image: url(${img}); */
  background-size: cover;
  background-repeat: no-repeat;
  filter: opacity(0.9);
  -webkit-box-shadow: 3px 3px 93px 33px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 93px 33px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 3px 93px 33px rgba(0, 0, 0, 0.75);
  @media (min-width: ${theme.breakpoint.md}) {
    background-position-y: center;
  }
`;

export const HeroImg = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: center bottom;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #000;
`;

export const H1 = styled.h1`
  text-transform: uppercase;
  padding: 38px;
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  @media (min-width: ${theme.breakpoint.md}) {
    font-size: 36px;
  }
`;

export const BattonWrap = styled.div`
  display: block;
  position: absolute;
  bottom: 20%;
  left: 10%;
  filter: drop-shadow(2px 4px 6px black);
  @media (min-width: ${theme.breakpoint.md}) {
    display: none;
  }
`;
