import React from "react";
import Character from "../components/funcComponents/character/Character";
import GamePhrase from "../components/ui/gamePhrase/GamePhrase";
import ScoreCard from "../components/ui/scoreCard/ScoreCard";
import Input from "../components/ui/input/Input";
import ParallaxBG from "../components/ui/parallaxBG/ParallaxBG";
import Coin from "../components/funcComponents/coin/Coin";

function EntryApp(props) {
  

  return (
      <div>
        <div>
          <Character />
        </div>
        <div>
          <Coin />
        </div>
        <div>
          <GamePhrase
            classNameGamePhrase={"titleDefault"}
            h1GamePhrase={"Martino"}
          />
        </div>
        <div>
          <ScoreCard
            classNameScoreCard={"scoreCardRow"}
            classNameScoreCardScore={"scoreCardScore"}
            classNameScoreCardName={"ScoreCardName"}
            h1ScoreCardPosition={"1"}
            h1ScoreCardName={"Donald"}
            h2ScoreCardScore={"4"}
            h2ScoreCardBestScore={"6"}
          />
        </div>
        <div>
          <Input
            cssStyleInput={"defaultText"}
            typeInput={"text"}
            placeholderInput={"Insert your Name"}
          />
        </div>
        <div>
          <Input
            cssStyleInput={"defaultButton"}
            typeInput={"button"}
            valueInput={"Play"}
          />
        </div>
        <div>
          <ParallaxBG/>
        </div>
      </div>
  );
}

export default EntryApp;