import React from "react";
import { Img } from "react-image";
import {
  Contacts,
  Hd,
  HeaderContent,
  LogoWrap,
  MainLink,
  Nav,
  HeaderLink,
  NavList,
  ListItem,
  SpanName,
  LinkTel,
  ButtonWrap,
  Menu,
} from "./Header.style.js";
import logo from "../../assets/mainLogo.svg";
import Join from "../Join/Join.jsx";
function Header() {
  const Callto = ({ phone, children }) => {
    return <LinkTel href={`tel:${phone}`}>{children}</LinkTel>;
  };

  return (
    <Hd>
      <div className="container">
        <HeaderContent>
          <LogoWrap>
          <Menu />
          <MainLink to={"/"}>
            <Img src={logo} style={{ width: "44px", height: "50px" }} />
          </MainLink>
          </LogoWrap>
          <Nav>
            <NavList>
              <ListItem>
                <HeaderLink href="#AboutUs">Про нас</HeaderLink>
              </ListItem>
              <ListItem>
                <HeaderLink href="#OurValues">Наші цінності</HeaderLink>
              </ListItem>
              <ListItem>
                <HeaderLink href="#Vacancy">Вакансії</HeaderLink>
              </ListItem>
              <ListItem>
                <HeaderLink href="#Contacts">Контакти</HeaderLink>
              </ListItem>
            </NavList>
          </Nav>
          <Contacts>
            <Callto phone="+380 98 314 7401">
              <SpanName>098 314 7401</SpanName>
            </Callto>
            <ButtonWrap>
              <Join />
            </ButtonWrap>
          </Contacts>
        </HeaderContent>
      </div>
    </Hd>
  );
}

export default Header;