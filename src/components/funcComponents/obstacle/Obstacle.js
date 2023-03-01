import { React, useRef, useEffect, forwardRef } from "react";
import "./obstacle.css";

const Obstacle = forwardRef((props, ref) => {
  let obsRef = useRef(null);
  let obsHeight = null;

  /*function callback(e) {
    props.callbackInput(e);
  }*/

  useEffect(() => {
    if (ref) {
      ref.current = {
        getButtonCoords: () => {
          let buttonCoords = obsRef.current.getBoundingClientRect();
          return {
            top: buttonCoords.top,
            left: buttonCoords.left,
            right: buttonCoords.right,
            bottom: buttonCoords.bottom,
            width: buttonCoords.width,
            height: buttonCoords.height,
          };
        },
      };
    }
  }, [ref]);

  return (
    <div
      className={"divObstacle"}
      /*onClick={callback}*/
      ref={obsRef}
      style={{
        /*height: `${randomHeight()}vh`,*/
        height: `${props.customHeight}vh`,
        //transform: `translateX(${props.customPosition}vw)`,
        left: `${props.customPosition}%`,
        top: `${props.customTop}%`,
        transition: "0.3s linear",
      }}
    />
  );
});

export default Obstacle;
