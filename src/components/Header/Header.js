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
          <a href="https://www.tesla.com/models">Model S</a>
          <a href="https://www.tesla.com/model3">Model 3</a>
          <a href="https://www.tesla.com/modelx">Model X</a>
          <a href="https://www.tesla.com/modely">Model Y</a>
          <a href="https://www.tesla.com/solarroof">Solar Roof</a>
          <a href="https://www.tesla.com/solarpanels">Solar Panel</a>
        </ul>
      </div>

      <div className="header__right">
        <a href="https://shop.tesla.com/">Shop</a>
        <a href="https://auth.tesla.com/oauth2/v1/authorize?redirect_uri=https%3A%2F%2Fwww.tesla.com%2Fteslaaccount%2Fowner-xp%2Fauth%2Fcallback&response_type=code&client_id=ownership&scope=offline_access%20openid%20ou_code%20email&audience=https%3A%2F%2Fownership.tesla.com%2F&locale=en-US">
          Account
        </a>
      </div>
    </div>
  );
};

export default Header;
