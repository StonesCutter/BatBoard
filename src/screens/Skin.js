import React from "react";
import { useState } from "react";
import {Howl, Howler} from 'howler';
import Input from "../components/ui/input/Input";
import Spritesheet from "react-responsive-spritesheet";
import GamePhrase from "../components/ui/gamePhrase/GamePhrase";
import ParallaxBG from "../components/ui/parallaxBG/ParallaxBG";
import bat from "../assets/images/bat.png";
import batBlue from "../assets/images/batBlue.png";
import batRed from "../assets/images/batRed.png";
import clickSkin from "../assets/sounds/clickSkin.flac";
import click from "../assets/sounds/click.wav";
import "../styles/skin/skin.css";

function Skin(props) {
  
  const [state, setState] = useState (
    {
    skinMod: bat,
    skinBlock2: true,
    skinBlock3: true,
    }
  );
  const {Howl, Howler} = require('howler');

  let points: 500;
  let clickChange = new Howl({
    src: [clickSkin]
  });
  let soundClick = new Howl({
    src: [click]
  });

  function changeSkin(e) {
    clickChange.play();
    let skin = e.target.value;
    let skinChange = null;

    if (skin === "SkinOne") {
      skinChange = bat;
    } else if (skin === "SkinTwo") {
      skinChange = batBlue;
    } else {
      skinChange = batRed;
    }

    setState({
      skinMod: skinChange,
    })

  }

  function applySkin() {
    soundClick.play();
  }

  return (
    <div className="skinMain">
      <ParallaxBG/>
      <Spritesheet
        className={"charPos"}
        image={state.skinMod}
        widthFrame={500}
        heightFrame={500}
        steps={6}
        fps={8}
        autoplay={true}
        loop={true}
        timeout={true}
      />
      <div className="skinInput">
        <div className="skinRowTitle">
            <GamePhrase
              classNameGamePhrase={"titleSkin"}
              h1GamePhrase={"Skin 1"}
            />
            <GamePhrase
              classNameGamePhrase={"titleSkin"}
              h1GamePhrase={"Skin 2"}
            />
            <GamePhrase
              classNameGamePhrase={"titleSkin"}
              h1GamePhrase={"Skin 3"}
            />
        </div>
        <div className="skinRowRadio">
          <Input
            cssStyleInput={""}
            nameInput={"skin"}
            valueInput={"SkinOne"}
            typeInput={"radio"}
            callbackInput={changeSkin}
          />
          <Input
            cssStyleInput={""}
            nameInput={"skin"}
            valueInput={"SkinTwo"}
            typeInput={"radio"}
            callbackInput={changeSkin}
          />
          <Input
            cssStyleInput={""}
            nameInput={"skin"}
            valueInput={"SkinThree"}
            typeInput={"radio"}
            callbackInput={changeSkin}
          />
        </div>
        <div className="skinColButton">
          <Input
              cssStyleInput={"defaultButton"}
              valueInput={"Apply Skin"}
              typeInput={"button"}
              onClickInput={applySkin}
            />
        </div>
      </div>
    </div>
  );
};

export default Skin;