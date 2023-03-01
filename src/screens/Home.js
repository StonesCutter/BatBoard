import React from "react";
import { useNavigate } from "react-router-dom";
import {Howl, Howler} from 'howler';
import Input from "../components/ui/input/Input";
import GamePhrase from "../components/ui/gamePhrase/GamePhrase";
import Character from "../components/funcComponents/character/Character";
import ParallaxBG from "../components/ui/parallaxBG/ParallaxBG";
import click from "../assets/sounds/click.wav";
import baseSound from "../assets/sounds/baseSound.flac";
import "../styles/home/home.css";

function Home() {
  
  const navigate = useNavigate();
  const {Howl, Howler} = require('howler');
  
  let name = null;
  let soundClick = new Howl({
    src: [click]
  });
  let soundBase = new Howl({
    src: [baseSound],
    autoplay: false,
    loop: true,
    volume: 0.5,
  })

  soundBase.stop();

  function readName(e) {
    name=e.target.value;
  };

  function goToGame() {
    navigate("/Game");
    soundClick.play();
    soundBase.stop();
  };

  function goToRank() {
    navigate("/Ranking");
    soundClick.play();
    soundBase.stop();
  };

  function goToTutorial() {
    navigate("/Tutorial");
    soundClick.play();
    soundBase.stop();
  };

  function goToSkin() {
    navigate("/Skin");
    soundClick.play();
    soundBase.stop();
  };

  
  return (
      <div className="homeMain">
        <ParallaxBG/>
        <div className="homeFirst">
          <GamePhrase
              classNameGamePhrase={"titleDefault"}
              h1GamePhrase={"BatBoard"}
            />
          <Character />
          <Input
            cssStyleInput={"defaultText"}
            typeInput={"text"}
            placeholderInput={"Insert Your Name"}
            callbackInput={readName}
          />
          <Input
            cssStyleInput={"defaultButton"}
            typeInput={"button"}
            valueInput={"Play"}
            onClickInput={goToGame}
          />
        </div>
        <div className="homeSecond">
          <Input
            cssStyleInput={"defaultButton"}
            typeInput={"button"}
            valueInput={"Ranking"}
            onClickInput={goToRank}
          />
          <Input
            cssStyleInput={"defaultButton"}
            typeInput={"button"}
            valueInput={"Tutorial"}
            onClickInput={goToTutorial}
          />
          <Input
            cssStyleInput={"defaultButton"}
            typeInput={"button"}
            valueInput={"Skin"}
            onClickInput={goToSkin}
          />
        </div>
      </div>
  );
};

export default Home;