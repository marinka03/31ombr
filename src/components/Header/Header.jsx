import React from "react";
import { Img } from "react-image";
import {
  Contacts,
  Hd,
  HeaderContent,
  MainLink,
  SpanName,
  LinkTel,
  ButtonWrap,
  Menu,
} from "./Header.style.js";
import logo from "../../assets/mainLogo.svg";
import MainButton from "../MainButton/MainButton.jsx";
function Header() {
  const Callto = ({ phone, children }) => {
    return <LinkTel href={`tel:${phone}`}>{children}</LinkTel>;
  };

  return (
    <Hd>
      <div className="container">
        <HeaderContent>
          <Menu />

          <MainLink to={"/"}>
            <Img src={logo} style={{ width: "44px", height: "50px" }} />
          </MainLink>

          <Contacts>
            <Callto phone="+380 98 314 7401">
              <SpanName>098 314 7401</SpanName>
            </Callto>
            <ButtonWrap>
              <MainButton />
            </ButtonWrap>
          </Contacts>
        </HeaderContent>
      </div>
    </Hd>
  );
}

export default Header;
