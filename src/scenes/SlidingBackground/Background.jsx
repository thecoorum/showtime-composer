// React
import React from "react";

import { interpolate, useCurrentFrame, AbsoluteFill } from "remotion";

const Background = (props) => {
  const frame = useCurrentFrame();

  const translateX = interpolate(frame, [0, 50], [-20, 20]);

  return (
    <AbsoluteFill>
      {[...Array(10).keys()].map((_, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            transform: `translateX(calc(${translateX}px * ${index + 1} * ${
              index % 2 === 0 ? -1 : 1
            }))`,
          }}
        >
          {[...Array(20).keys()].map((_, index) => (
            <h1 key={index} className="title title--relative title--outlined title--inline title--transparent">
              Booqable
            </h1>
          ))}
        </div>
      ))}
    </AbsoluteFill>
  );
};

export default Background;
