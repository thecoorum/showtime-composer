// React
import React, { Fragment } from "react";

// Components
import Small from "./Titles/Small";
import Large from "./Titles/Large";

const Frame = () => {
  return (
    <Fragment>
      <div className="wrapper">
        <Small />
        <Large />
      </div>
    </Fragment>
  );
};

export default Frame;
