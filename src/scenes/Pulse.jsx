// React
import React from "react";

import { useCurrentFrame, interpolate, Easing } from "remotion";

const Frame = () => {
  const frame = useCurrentFrame();

  const spacing = interpolate(
    frame,
    [25, 30],
    [0, 30],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.elastic(0.8)
    }
  )

  return (
    <div className="wrapper">
      <div>
        <h1
          className="title title--relative title--outlined title--transparent"
          style={{ fontSize: 32, letterSpacing: spacing + 'px' }}
        >
          Today we will
        </h1>
        {"See:".split("").map((char, index) => (
          <h1
            key={index}
            className={`title title--relative title--inline ${frame > index + 5 && frame < index + 15 && 'title--outlined title--transparent'}`}
            style={{ fontSize: 256 }}
          >
            {char}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Frame;
