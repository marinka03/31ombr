import styled from "styled-components";
import { theme } from "../../vars";
import { Link } from "react-router-dom";

export const JoinLink = styled(Link)`
  background-color: ${theme.color.summer};
  color: ${theme.color.dark};
  font-size: 20px;
  font-weight: 600;
  padding: 10px 35px;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  transition: .5s;
`;
