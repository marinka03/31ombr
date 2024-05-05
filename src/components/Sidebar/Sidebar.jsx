import React from "react";
import {
  Menu,
  CloseIcon,
  MenuLink,
  MenuContent,
  ContentWrap,
  List,
  JoinWrap,
} from "./Sidebar.style";
import Join from "../Join/Join";
import { Img } from "react-image";
import logo from "../../assets/mainLogo.svg";
import { Link } from "react-router-dom";

function Sidebar({ handleClickClose }) {
  return (
    <Menu id="backdrop">
      <div className="container">
        <MenuContent>
          <CloseIcon size={40} onClick={handleClickClose} />
          <Link to={"/"} onClick={handleClickClose}>
            <Img
              src={logo}
              style={{ width: "110px", height: "116px", margin: "0 auto" }}
            />
          </Link>
          <ContentWrap>
            <nav>
              <List>
                <li>
                  <MenuLink href="#AboutUs" onClick={handleClickClose}>
                    Про нас
                  </MenuLink>
                </li>
                <li>
                  <MenuLink href="#OurValues" onClick={handleClickClose}>
                    Наші цінності
                  </MenuLink>
                </li>
                <li>
                  <MenuLink href="#Vacancy" onClick={handleClickClose}>
                    Вакансії
                  </MenuLink>
                </li>
                <li>
                  <MenuLink href="#Contacts" onClick={handleClickClose}>
                    Контакти
                  </MenuLink>
                </li>
              </List>
            </nav>
            <JoinWrap>
              <Join />
            </JoinWrap>
          </ContentWrap>
        </MenuContent>
      </div>
    </Menu>
  );
}

export default Sidebar;
