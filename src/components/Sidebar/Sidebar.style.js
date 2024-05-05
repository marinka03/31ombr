import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { theme } from "../../vars";

export const Menu = styled.div`
  width: 100%;
  background-color: ${theme.color.dark_green};
  transition: left 1s ease-in-out 0s;
  position: fixed;
  z-index: 3;
  top: 0px;
  left: -100%;
  bottom: 0px;
`;

export const MenuContent = styled.div`
  position: relative;
  height: 100%;
  padding: 25px;
`;

export const ContentWrap = styled.div`
  position: relative;
  top: 30%;
  left: 30%;
  transform: translate(-30%, -30%);
`;

export const CloseIcon = styled(IoMdClose)`
  position: absolute;
  top: 25px;
  right: 0px;
  cursor: pointer;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5em;
  margin-bottom: 50px;
`;

export const MenuLink = styled.a`
  font-size: 32px;
  color: ${theme.color.light_summer};
`;

export const JoinWrap = styled.div`
  :hover {
    background-color: ${theme.color.button_light_hover};
  }
`;
