import React from "react";
import "./scoreCard.css";

function ScoreCard(props) {

    return(
        <div className={props.classNameScoreCard}>
            <div className={props.classNameScoreCardName}>
                <h1>
                    {props.h1ScoreCardPosition}
                </h1>
                &ensp;
                <h1>
                    {props.h1ScoreCardName}
                </h1>
                &ensp;
            </div>
            <div className={props.classNameScoreCardScore}>
                <h2>
                    Score: {props.h2ScoreCardScore}
                </h2>
                &ensp;
                <h2>
                    BestScore: {props.h2ScoreCardBestScore}
                </h2>
            </div>
        </div>
    )
} 

export default ScoreCard