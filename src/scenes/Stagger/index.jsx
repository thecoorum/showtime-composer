// React
import React, { Fragment } from "react";

// Components
import Title from "./Title";

const Intro = () => {
  return (
    <Fragment>
      <div className="wrapper">
        {[...Array(4).keys()].map((_, index) => (
          <Title key={index} index={index} text="Welcome" />
        ))}
      </div>
    </Fragment>
  );
};

export default Intro;
