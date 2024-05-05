import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../vars";

export const LightJoinLink = styled(Link)`
  background-color: ${theme.color.light_summer};
  color: ${theme.color.dark};
  font-size: 20px;
  font-weight: 600;
  padding: 10px 35px;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  transition: .5s;
`