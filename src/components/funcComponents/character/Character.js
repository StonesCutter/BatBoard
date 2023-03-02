import { React, useRef, useEffect, forwardRef } from "react";
import PropTypes from "prop-types";
import Spritesheet from "react-responsive-spritesheet";
import "./character.css";
import bat from "../../../assets/images/bat.png";

const Character = forwardRef((props, ref) => {
  let charRef = useRef(null);

  useEffect(() => {
    if (ref) {
      ref.current = {
        getButtonCoords: () => {
          let buttonCoords = charRef.current.getBoundingClientRect();
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
      className={"divRed"}
      ref={charRef}
      style={{
        transform: translateY(${props.distanceTop}vh),
        transition: "0.3s ease-in",
      }}
    >
      <Spritesheet
        className={"divCharacter"}
        image={bat}
        widthFrame={500}
        heightFrame={500}
        steps={6}
        fps={8}
        autoplay={true}
        loop={true}
        timeout={true}
      />
    </div>
  );
});

export default Character;

// onClick per farlo saltare, usando props per passare la funzione