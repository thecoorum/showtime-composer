// React
import React from "react";

// Libraries
import { useCurrentFrame, interpolate, spring, Easing } from "remotion";

const APPEARENCE_DELAY = 4;
const OUTLINE_DELAY = 5;

const Title = (props) => {
  const frame = useCurrentFrame();

  const translateY = spring({
    frame,
    from: -200,
    to: -175,
    fps: 30,
    config: {
      overshootClamping: true,
      stiffness: 50,
    },
  });

  const translateX = interpolate(
    frame,
    [
      30 + 5 * props.index,
      35 + 5 * props.index,
      40 + 5 * props.index,
      45 + 5 * props.index,
    ],
    [0, -50, 50, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.elastic(1),
    }
  );

  const opacity = interpolate(
    frame,
    [APPEARENCE_DELAY * props.index, 1 + APPEARENCE_DELAY * props.index],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const outlined = interpolate(
    frame,
    [15 + OUTLINE_DELAY * props.index, 16 + OUTLINE_DELAY * props.index],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <h1
      className={`title ${outlined !== 0 && "title--transparent title--outlined"}`}
      style={{
        transform: `translateY(calc(${translateY}px + (100px * ${props.index}))) translateX(${translateX}px)`,
        opacity,
      }}
    >
      {props.text}
    </h1>
  );
};

export default Title;
