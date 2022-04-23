import React from "react";
import "./Header.css";
import TeslaLogo from "../../assets/teslaLogoSmall.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const refreshHomePage = () => {
    console.log(location.pathname);
    if (location.pathname === "/") {
      window.location.reload(false);
    }
  };

  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/" onClick={() => refreshHomePage()}>
          <img src={TeslaLogo} alt="logo" />
        </Link>
      </div>

      <div className="header__center">
        <ul className="header__center-links">
          <a href="/ModelS">Model S</a>
          <a href="/Model3">Model 3</a>
          <a href="/ModelX">Model X</a>
          <a href="/ModelY">Model y</a>
          <a href="/SolarRoof">Solar Roof</a>
          <a href="/SolarPanel">Solar Panel</a>
        </ul>
      </div>

      <div className="header__right">
        <a href="/shop">Shop</a>
        <a href="/account">Account</a>
      </div>
    </div>
  );
};

export default Header;
