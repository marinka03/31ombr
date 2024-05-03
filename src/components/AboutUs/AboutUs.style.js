import styled from "styled-components";
import { theme } from "../../vars";

export const ContentWrap = styled.div`
  display: grid;
  grid-row-gap: 25px;
  padding-bottom: 50px;
  border-bottom: 3px solid ${theme.color.summer};
  margin-bottom: 50px;
  @media (min-width: ${theme.breakpoint.md}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 45px;
  }
`;
