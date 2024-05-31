import React from "react";
import Image from "next/image";
import logo_dh_ele from "/public/assets/logo.svg";
import drp_dwn_icn from "/public/assets/drp_dwn_icn.svg";
import header_lang_icn from "/public/assets/header_lang_icn.svg";

const Nav = () => {
  return (
    <div className="nav">
      <div className="dailyhunt">
        <Image src={logo_dh_ele} alt="Daily Hunt Logo" />
      </div>
      <div className="news">
        <h2>
          News <Image src={drp_dwn_icn} alt="Dropdown Icon" />
        </h2>
        <div className="dropdown">
          <ul>
            <li>
              <a href="/pagee">Viral</a>
            </li>
            <li>
              <a href="/video">Video</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="aa">
        <Image src={header_lang_icn} alt="Language Icon" />
      </div>
    </div>
  );
};

export default Nav;
