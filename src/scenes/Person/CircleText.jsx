// React
import React from "react";

// Libraries
import { interpolate } from "remotion";

const CircleText = (props) => {
  const rotate = interpolate(props.frame, [0, 1000], [0, 2500]);

  return (
    <svg
      viewBox="0 0 350 350"
      width="350"
      height="350"
      style={{ transform: `rotate(${rotate}deg)`, ...props.style }}
    >
      <defs>
        <path
          id="circle"
          d="
        M 175, 175
        m -129.5, 0
        a 129.5,129.5 0 1,1 259,0
        a 129.5,129.5 0 1,1 -259,0"
        />
      </defs>
      <text className="title" style={{ fontSize: 32, fill: "#cd2223", fontFamily: 'Monument' }}>
        <textPath xlinkHref="#circle" style={{ fontSize: 32, fill: "#cd2223", fontFamily: 'Monument' }}>{props.text}</textPath>
      </text>
    </svg>
  );
};

export default CircleText;
