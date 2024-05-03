import styled from "styled-components";
import { theme } from "../../vars";

export const Button = styled.button`
  background-color: ${theme.color.summer};
  color: ${theme.color.dark};
  font-size: 20px;
  font-weight: 600;
  padding: 10px 35px;
  border-radius: 2px;
  border: none;
  cursor: pointer;
`;
