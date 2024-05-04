import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { Img } from "react-image";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
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
            {/* <SpanName>098 314 7401</SpanName> */}
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
          <HoverLink
            to={
              "https://l.facebook.com/l.php?u=https%3A%2F%2Ftiktok.com%2F%4031ombr%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR3zO0aR6nFtPgUox7HoqSTOwEKWIKFS1wTYnVQsUaJNEf5xBR5Mc5F8VYo_aem_AWqq3SRBquQsgf_ZQEjlZtOMwKQJVpjfwd8UdD8kgeB4IHvxSOFVShhUJONGVUSrd9XctRRzqAiS19hQQ7JtT8pb&h=AT0pYV9p7WTAu6kr2-AT2IIa_400ROANoZg2OeKUQoJGvHJXHH_GObpXKsMNDlr1W4v3zKIEWzkln7UoCW-q8Ik87lPeOlqx9kghfj2BrO1dC9OwZe4x4Y2Q7dxNBklx9CzTMg"
            }
          >
            <IconWrap>
              <IoLogoTiktok size={24} fill="#000" />
            </IconWrap>
          </HoverLink>
        </Contacts>
      </ContentWrap>
    </FooterMain>
  );
}

export default Footer;
