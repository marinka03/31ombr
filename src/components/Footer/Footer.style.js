import styled from "styled-components";
import { theme } from "../../vars";
import { Link } from "react-router-dom";
import fireSparks from "../../assets/fire-sparks.jpg"

export const FooterMain = styled.footer`
  width: 100%;
  height: 150px;
  background-color: #151a1a;
  /* background-image: url(${fireSparks}); */
`;
export const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LinkTel = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${theme.color.text};
  :hover {
    background-color: ${theme.color.light_summer};
  }
`;
export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 2px;
  background-color: #f5f5f5;
  transition: 0.5s;
`;
export const HoverLink = styled(Link)`
  :hover {
    background-color: ${theme.color.light_summer};
  }
`;
export const Contacts = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
`;
export const SpanName = styled.span`
  display: none;
  @media (min-width: ${theme.breakpoint.xl}) {
    display: block;
  }
`;
