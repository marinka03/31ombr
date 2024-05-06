import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import {
  Section,
  Nav,
  Title,
  LinkSpecial,
  LinkNavigation,
} from "./Contacts.style";

function Contacts() {
  const Callto = ({ phone, children }) => {
    return <LinkSpecial href={`tel:${phone}`}>{children}</LinkSpecial>;
  };

  const Mailto = ({ mail, children }) => {
    return <LinkSpecial href={`mailto:${mail}`}>{children}</LinkSpecial>;
  };
  return (
    <Section id="Contacts">
      <Title>Контакти</Title>
      <Nav>
        <Callto phone="+380 98 314 7401">
          <FaPhoneFlip />
          <span>098 314 7401</span>
        </Callto>

        <LinkNavigation to={"https://www.facebook.com/31ombr"}>
          <FaFacebookF />
          <span>Facebook</span>
        </LinkNavigation>

        <LinkNavigation>
          <FaInstagram
            to={
              "https://www.instagram.com/31ombr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            }
          />
          <span>Instagram</span>
        </LinkNavigation>

        <LinkNavigation>
          <IoLogoTiktok
            to={
              "https://l.facebook.com/l.php?u=https%3A%2F%2Ftiktok.com%2F%4031ombr%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR3zO0aR6nFtPgUox7HoqSTOwEKWIKFS1wTYnVQsUaJNEf5xBR5Mc5F8VYo_aem_AWqq3SRBquQsgf_ZQEjlZtOMwKQJVpjfwd8UdD8kgeB4IHvxSOFVShhUJONGVUSrd9XctRRzqAiS19hQQ7JtT8pb&h=AT0pYV9p7WTAu6kr2-AT2IIa_400ROANoZg2OeKUQoJGvHJXHH_GObpXKsMNDlr1W4v3zKIEWzkln7UoCW-q8Ik87lPeOlqx9kghfj2BrO1dC9OwZe4x4Y2Q7dxNBklx9CzTMg"
            }
          />
          <span>TikTok</span>
        </LinkNavigation>

        <Mailto mail={"31ombr@post.mil.gov.ua"}>
          <IoMdMail />
          <span>31ombr@post.mil.gov.ua</span>
        </Mailto>
      </Nav>
    </Section>
  );
}

export default Contacts;
