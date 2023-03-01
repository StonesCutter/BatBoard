import React, { Component, createRef } from "react";
import "../styles/game/game.css";
import {
  moveObj,
  renderItems,
  pushToObjList,
  removePassedObjects,
  checkCollision,
  checkScore,
} from "../utils/gameMechanicsUtils";
import Character from "../components/funcComponents/character/Character";

class Game extends Component {
  constructor(props) {
    super(props);

    this.charRef =
      createRef(); /* MANTIENI!!! -  const buttonCoords = charRef.current.getBoundingClientRect(); IMPORTANTISSIMO!!!! */
    this.coordinates = null;
    this.currentTop = 50;
    this.isFalling = false;
    this.pushUp = null;
    this.obsListAndScores = null;
    this.scoreCount = 0;

    this.obsList = [{}];
    this.gameOver = false;

    this.state = {
      top: 0,
      collision: false,
      timePassed: null,
    };
  }

  componentDidMount() {}

  componentDidUpdate() {
    this.coordinates = this.charRef.current.getButtonCoords();
    //console.log("score count:", this.scoreCount);

    if (!this.gameOver) {
      this.gameOver = checkCollision(
        this.obsList,
        "obstacle",
        this.coordinates.left,
        this.coordinates.top,
        30,
        30
      );
    }

    this.isGameOver();
    if (!this.gameOver) {
      this.obsList = removePassedObjects(this.obsList);
      moveObj(this.obsList, 2);
      pushToObjList(this.obsList, this.state.timePassed, 20, "obstacle");

      this.obsListAndScores = checkScore(this.obsList, this.scoreCount);
      //console.log("obsListAndScores", this.obsListAndScores);
      this.obsList = this.obsListAndScores.objList;
      this.scoreCount = this.obsListAndScores.scoreCount;
    }
  }

  /* ------- CHARACTER FUNCTIONS  ------ */

  goUp = () => {
    this.pushUp -= 50;
    //console.log("Go UP");
    //console.log("Position right now, ", this.state.top);
    //console.log("dimensione schermo", window.innerHeight, window.innerWidth);
    //console.log("coordinate palla: ", this.coordinates, this.coordinates.top);
    //console.log("coordinate palla top: ", this.coordinates.top);
  };

  goDown = () => {
    //console.log("current top", currentTop);
    // console.log("interval", this.interval);

    if (this.isFalling) {
      this.currentTop = parseInt(this.state.top);
      if (this.currentTop < 100) {
        this.currentTop += 5 + this.pushUp;
      } else {
        this.gameOver = true;
      }
      this.pushUp = 0;
      /*if (currentTop > 45) {
        clearInterval(this.timer);
        currentTop = 45;
        this.isFalling = false;
      }*/
    }
    this.setState({
      top: this.currentTop,
      timePassed: this.state.timePassed + 1,
    });
  };

  isGameOver() {
    if (this.gameOver) {
      this.isFalling = false;
      clearInterval(this.timer);
      this.currentTop = 47;
    }
  }

  startFall = () => {
    console.log("entrati nel start fall");
    this.isFalling = true;
    this.interval = setInterval(this.goDown, 50);
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="homePosition" onClick={this.goUp}>
        <button onClick={this.startFall}>Start</button>
        Scores are: {this.scoreCount}
        {/*<div className="charPosition">*/}
        <Character distanceTop={this.state.top} ref={this.charRef} />
        {/*{showItems(this.obsList)}*/}
        {/*<Obstacle />*/}
        {/*</div>*/}
        {renderItems(this.obsList, "obstacle")}
        {renderItems(this.coinsList, "coin")}
      </div>
    );
  }
}

export default Game;
