// React
import React from "react";

// Libraries
import { interpolate, useVideoConfig, Img, Easing } from "remotion";

const Square = (props) => {
  const { durationInFrames } = useVideoConfig();

  const slideRight = interpolate(
    props.frame,
    [0, 15, durationInFrames - 25, durationInFrames - 10],
    [1920, 1200, 1200, 0],
    {
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
      easing: Easing.elastic(0.8),
    }
  );

  const slideLeft = interpolate(
    props.frame,
    [5, 20, durationInFrames - 20, durationInFrames - 5],
    [0, 200, 200, 1920],
    {
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
      easing: Easing.elastic(0.8),
    }
  );

  const height = interpolate(
    props.frame,
    [23, 30, durationInFrames - 32, durationInFrames - 25],
    [50, 500, 500, 50],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.elastic(0.8),
    }
  );

  const transform = interpolate(
    props.frame,
    [
      30 + props.index * 2,
      31 + props.index * 2,
      33 + props.index * 2,
      34 + props.index * 2,
      36 + props.index * 2,
      37 + props.index * 2,
    ],
    [0, 30, 30, 60, 60, 90],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <div
      className={`square ${props.index !== 0 && "square--outlined"}`}
      style={{
        left: slideLeft,
        right: slideRight,
        transform: `translateX(${transform}px) translateY(${transform}px)`,
        height,
        backgroundColor: props.index === 0 ? "#FFF" : "transparent",
        zIndex: props.index === 0 && 1,
        ...props.style,
      }}
    >
      {props.index === 0 &&
        props.frame >= 30 &&
        props.frame <= durationInFrames - 32 &&
        props.image && (
          <Img
            src={props.image}
            style={{
              top: "50%",
              left: "50%",
              position: "absolute",
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
    </div>
  );
};

export default Square;
