import React from "react";
import Item from "../../components/Item/Item";

import Accessories from "../../assets/Desktop-Accessories.jpg";
import ModelS from "../../assets/Desktop-ModelS.jpeg";
import Model3 from "../../assets/Desktop-Model3.jpeg";
import ModelX from "../../assets/Desktop-ModelX.jpeg";
import ModelY from "../../assets/Desktop-ModelY.jpeg";
import SolarPanels from "../../assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "../../assets/Desktop-SolarRoof.jpeg";

import "./Home.css";

const Home = () => {
  return (
    <div className="home__itemsContainer">
      <Item
        title="Model 3"
        desc="Order Online for Touchless Delivery"
        descLink=""
        backgroundImg={Model3}
        leftBtnTxt="ORDER NOW"
        leftBtnLink=""
        rightBtnTxt="LEARN MORE"
        rightBtnLink=""
        twoButtons="true"
        first
      />
      <Item
        title="Model Y"
        desc="Order Online for Touchless Delivery"
        descLink=""
        backgroundImg={ModelY}
        leftBtnTxt="ORDER NOW"
        leftBtnLink=""
        rightBtnTxt="LEARN MORE"
        rightBtnLink=""
        twoButtons="true"
      />
      <Item
        title="Model S"
        desc="Order Online for Touchless Delivery"
        descLink=""
        backgroundImg={ModelS}
        leftBtnTxt="ORDER NOW"
        leftBtnLink=""
        rightBtnTxt="LEARN MORE"
        rightBtnLink=""
        twoButtons="true"
      />
      <Item
        title="Model X"
        desc="Order Online for Touchless Delivery"
        descLink=""
        backgroundImg={ModelX}
        leftBtnTxt="ORDER NOW"
        leftBtnLink=""
        rightBtnTxt="LEARN MORE"
        rightBtnLink=""
        twoButtons="true"
      />
      <Item
        title="Solar Panels"
        desc="Lowest Cost Solar Panels in America"
        descLink=""
        backgroundImg={SolarPanels}
        leftBtnTxt="ORDER NOW"
        leftBtnLink=""
        rightBtnTxt="LEARN MORE"
        rightBtnLink=""
        twoButtons="true"
      />
      <Item
        title="Solar Roof"
        desc="Produce Clean Energy From Your Roof"
        descLink=""
        backgroundImg={SolarRoof}
        leftBtnTxt="ORDER NOW"
        leftBtnLink=""
        rightBtnTxt="LEARN MORE"
        rightBtnLink=""
        twoButtons="true"
      />
      <Item
        title="Accessories"
        desc=""
        descLink=""
        backgroundImg={Accessories}
        leftBtnTxt="ORDER NOW"
        leftBtnLink=""
        rightBtnTxt="LEARN MORE"
        rightBtnLink=""
        twoButtons="false"
      />
    </div>
  );
};

export default Home;
