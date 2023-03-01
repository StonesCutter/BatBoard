import React from "react";
import "./gamePhrase.css";

function GamePhrase(props) {

    return(
        <h1 className={props.classNameGamePhrase}>
            {props.h1GamePhrase}
        </h1>
    )
} 

export default GamePhrase