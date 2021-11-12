// React
import React, { Fragment } from "react";

// Components
import Background from "./Background";

// Libraries
import { useCurrentFrame } from "remotion";

const Frame = () => {
  const frame = useCurrentFrame();

  return (
    <Fragment>
      <div className="wrapper">
        {frame < 10 && <h1 className="title">To</h1>}
        {frame >= 10 && frame < 20 && <h1 className="title">The</h1>}
        {frame >= 20 && (
          <Fragment>
            <Background />
            <h1 className="title">Showtime</h1>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default Frame;
