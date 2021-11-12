// React
import React from "react";

// Libraries
import { spring, useCurrentFrame } from "remotion";

const Large = () => {
  const frame = useCurrentFrame();

  const translate = spring({
    frame,
    from: -500,
    to: 200,
    fps: 30,
    config: {
      overshootClamping: true,
      stiffness: 50,
    },
  });

  return (
    <h1
      className={`title ${frame >= 10 && "title--transparent title--outlined"}`}
      style={{
        transform: `translateX(${translate}px)`,
        fontSize: 512,
      }}
    >
      Everybody
    </h1>
  );
};

export default Large;
