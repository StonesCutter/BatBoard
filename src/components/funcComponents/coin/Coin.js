import React from "react";
import Spritesheet from "react-responsive-spritesheet";
import "./coin.css";
import coin from "../../../assets/images/coin.png";

function Coin(props) {
  return (
    <div
      className="divRedCoin"
      style={{
        left: `${props.customPosition}%`,
        top: `${props.customTop}%`,
        transition: "0.3s linear",
      }}
    >
      <Spritesheet
        className={"divCoin"}
        image={coin}
        widthFrame={500}
        heightFrame={500}
        steps={6}
        fps={20}
        autoplay={true}
        loop={true}
        timeout={true}
      />
    </div>
  );
}

export default Coin;
