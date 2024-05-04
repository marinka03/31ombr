import styled from "styled-components";
import bg from "../../assets/green_smoke_background.jpg";
import { theme } from "../../vars";
import { Link } from "react-router-dom";

export const Section = styled.section`
  width: 100%;
  height: 500px;
  position: relative;
  padding-top: 50px;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Nav = styled.nav`
  position: absolute;
  bottom: 6em;
  left: 1em;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  @media (min-width: ${theme.breakpoint.md}) {
    left: 3em;
  }
`;

export const Title = styled.h2`
  font-size: 5em;
  color: orange;
  opacity: 0.5;
  position: absolute;
  top: 25%;
  left: 5%;
  @media (min-width: 500px) {
    font-size: 7em;
  }
`;
export const LinkTel = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${theme.color.text};
  border: 1px solid ${theme.color.light_summer};
  border-radius: 4px;
  padding: 10px 25px;
  cursor: pointer;
`;

export const LinkNavigation = styled(Link)`
  color: ${theme.color.white};
  border: 1px solid ${theme.color.light_summer};
  border-radius: 4px;
  padding: 10px 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
`;
