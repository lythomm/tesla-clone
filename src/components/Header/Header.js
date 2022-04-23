import React from "react";
import "./Header.css";
import TeslaLogo from "../../assets/teslaLogoSmall.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={TeslaLogo} alt="logo" />
      </div>

      <div className="header__center">
        <ul className="header__center-links">
          <a href="/">Model S</a>
          <a href="/">Model 3</a>
          <a href="/">Model X</a>
          <a href="/">Model y</a>
          <a href="/">Solar Roof</a>
          <a href="/">Solar Panel</a>
        </ul>
      </div>

      <div className="header__right">
        <a href="shop">Shop</a>
        <a href="account">Account</a>
      </div>
    </div>
  );
};

export default Header;
