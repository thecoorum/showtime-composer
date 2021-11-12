// React
import React from "react";

// Libraries
import { useCurrentFrame, interpolate, Img, Easing } from "remotion";

import logo from "../assets/images/logo.svg";

const Outro = (props) => {
  const frame = useCurrentFrame();

  const topTranslate = interpolate(frame, [5, 15], [-150, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.elastic(0.8)
  });
  const topOpacity = interpolate(frame, [5, 10], [0, 1]);

  const bottomTranslate = interpolate(frame, [35, 45], [150, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.elastic(0.8)
  });
  const bottomOpacity = interpolate(frame, [35, 40], [0, 1]);

  const spacing = interpolate(frame, [50, 55], [0, 35], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const footerTranslate = interpolate(frame, [40, 55], [150, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.elastic(0.8)
  });
  const footerOpacity = interpolate(frame, [45, 50], [0, 1])

  return (
    <div className="wrapper">
      <div style={{ textAlign: "center" }}>
        <h1
          className="title title--relative"
          style={{
            transform: `translateY(${topTranslate}px)`,
            fontSize: 256,
            opacity: topOpacity,
          }}
        >
          Let's
        </h1>
        <h1
          className="title title--relative title--outlined"
          style={{
            transform: `translateY(${bottomTranslate}px)`,
            letterSpacing: spacing + "px",
            fontSize: 64,
            opacity: bottomOpacity,
          }}
        >
          Get started
        </h1>
      </div>
      <h1
        className="title title--outlined"
        style={{
          position: "absolute",
          bottom: 150,
          transform: `translateY(${footerTranslate}px)`,
          fontSize: 32,
          opacity: footerOpacity
        }}
      >
        Made with ❤️ for <Img src={logo} />
      </h1>
    </div>
  );
};

export default Outro;
