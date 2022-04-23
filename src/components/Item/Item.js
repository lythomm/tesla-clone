import React from "react";
import Button from "../Button/Button";
import { MdExpandMore } from "react-icons/md";
import Fade from "react-reveal/Fade";

import "./Item.css";

const Item = ({
  title,
  desc,
  descLink,
  backgroundImg,
  leftBtnTxt,
  leftBtnLink,
  rightBtnTxt,
  rightBtnLink,
  twoButtons,
  first,
}) => {
  console.log(title + twoButtons);
  return (
    <>
      <div
        className="item"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
        <div className="item__container">
          <div className="item__text">
            <Fade bottom>
              <h1>{title}</h1>
              <Fade bottom>
                <p>{desc}</p>
              </Fade>
            </Fade>
          </div>
          <div className="item__lowerThird">
            <div className="item__buttons">
              <Fade bottom>
                <Button imp="primary" text={leftBtnTxt} link={leftBtnLink} />
                {twoButtons === "true" ? (
                  <Button
                    imp="secondary"
                    text={rightBtnTxt}
                    link={rightBtnLink}
                  />
                ) : (
                  ""
                )}
              </Fade>
            </div>
            {first && (
              <div className="item__expand">
                <MdExpandMore className="item__expand-icon" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
