// React
import React from "react";

// Libraries
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

const Small = () => {
  const frame = useCurrentFrame();

  const translate = spring({
    frame,
    from: -100,
    to: 0,
    fps: 30,
    config: {
      overshootClamping: true,
      stiffness: 50,
    },
  });

  const letterSpacing = spring({
    frame,
    from: 1,
    to: 50,
    fps: 30,
    config: {
      overshootClamping: true,
      stiffness: 50,
    },
  });

  const opacity = interpolate(frame, [9, 10], [0, 1]);

  return (
    <h1
      className="title"
      style={{
        transform: `translateX(${translate}px)`,
        opacity,
        letterSpacing,
        fontSize: 96,
      }}
    >
      Everybody
    </h1>
  );
};

export default Small;
