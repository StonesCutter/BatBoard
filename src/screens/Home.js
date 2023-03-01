import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/input/Input";
import GamePhrase from "../components/ui/gamePhrase/GamePhrase";
import Character from "../components/funcComponents/character/Character";
import ParallaxBG from "../components/ui/parallaxBG/ParallaxBG";
import "../styles/home/home.css";

function Home() {
  
  const navigate = useNavigate()

  function goToGame() {
    navigate("/Game")
  }

  function goToRank() {
    navigate("/Ranking")
  }

  function goToTutorial() {
    navigate("/Tutorial")
  }

  function goToSkin() {
    navigate("/Skin")
  }

  
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
}

export default Home;