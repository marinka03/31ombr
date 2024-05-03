import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { Img } from "react-image";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import logo from "../../assets/mainLogo.svg";
import {
  FooterMain,
  LinkTel,
  SpanName,
  ContentWrap,
  HoverLink,
  IconWrap,
  Contacts,
} from "./Footer.style";

function Footer() {
  const Callto = ({ phone, children }) => {
    return <LinkTel href={`tel:${phone}`}>{children}</LinkTel>;
  };
  return (
    <FooterMain>
      <ContentWrap className="container">
        <Img src={logo} style={{ width: "44px", height: "50px" }} />
        <Contacts>
          <HoverLink to={"https://www.facebook.com/31ombr"}>
            <IconWrap>
              <FaFacebookF size={24} fill="#000" />
            </IconWrap>
          </HoverLink>
          <Callto phone="+380 98 314 7401">
            <IconWrap>
              <FaPhoneFlip size={24} fill="#000" />
            </IconWrap>
            <SpanName>098 314 7401</SpanName>
          </Callto>

          <HoverLink
            to={
              "https://www.instagram.com/31ombr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            }
          >
            <IconWrap>
              <FaInstagram size={24} fill="#000" />
            </IconWrap>
          </HoverLink>
        </Contacts>
      </ContentWrap>
    </FooterMain>
  );
}

export default Footer;
