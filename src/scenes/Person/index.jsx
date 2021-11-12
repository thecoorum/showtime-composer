// React
import React from "react";

// Libraries
import { useCurrentFrame, interpolate, Easing } from "remotion";

// Components
import Square from "./Square";
import CircleText from "./CircleText";

const Frame = (props) => {
  const frame = useCurrentFrame();

  const squares = [...Array(3).keys()];

  const translateX = interpolate(frame, [0, 60], [0, -250]);

  return (
    <div className="wrapper">
      <h1
        className="title title--outlined"
        style={{
          WebkitTextStroke: "2px #fff",
          fontSize: 256,
          bottom: 50,
          left: -50,
          whiteSpace: 'nowrap',
          transform: `translateX(${translateX}px)`,
        }}
      >
        {props.name}
      </h1>
      <CircleText
        frame={frame}
        style={{ position: "absolute", bottom: 50, left: 50 }}
        text={props.subtitle}
      />
      {squares.map((_, index) => (
        <Square
          key={index}
          index={index}
          name={props.name}
          frame={frame}
          style={{ position: "absolute", top: 50 }}
          image={props.image}
        />
      ))}
    </div>
  );
};

export default Frame;
