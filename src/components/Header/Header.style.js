import styled from "styled-components";
import { IoMenuOutline } from "react-icons/io5";
import { theme } from "../../vars";
import { Link } from "react-router-dom";

export const Hd = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
  width: 100%;
  background-color: #151a1a;
  position: fixed;
  z-index: 2;
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

export const Menu = styled(IoMenuOutline)`
  display: block;
  width: 30px;
  height: 30px;
  cursor: pointer;
  @media (min-width: ${theme.breakpoint.md}) {
    display: none;
  }
`;

export const MainLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 20px;
  font-weight: 600;
  color: ${theme.color.summer};
  @media (min-width: ${theme.breakpoint.md}) {
    font-size: 24px;
  }
`;

export const Nav = styled.nav`
  display: none;
  @media (min-width: ${theme.breakpoint.md}) {
    display: block;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-size: 24px;
`;
export const ListItem = styled.li`
  :hover {
    color: ${theme.color.summer};
  }
`;
export const HeaderLink = styled.a`
  color: ${theme.color.light_summer};
  transition: 0.5s;
`;

export const SpanName = styled.span`
  display: block;
  font-size: 24px;
`;

export const Contacts = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const LinkTel = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${theme.color.text};
`;

export const ButtonWrap = styled.div`
  display: none;
  @media (min-width: ${theme.breakpoint.md}) {
    display: block;
    :hover {
      background-color: ${theme.color.button_light_hover};
    }
  }
`;
