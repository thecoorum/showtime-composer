// React
import { Fragment } from "react";

// Libraries
import ReactDOM from "react-dom";
import { Series, Audio } from "remotion";
import { Player } from "@remotion/player";

// Components
import Sliding from "./scenes/SlidingBackground";
import Large from "./scenes/LargeTitle";
import Stagger from "./scenes/Stagger";
import Pulse from "./scenes/Pulse";
import Person from "./scenes/Person";
import Outro from "./scenes/Outro";
import App from "./App";

// Assets
import intro from "./assets/audio/intro.mp3";
import middle from "./assets/audio/middle.mp3";
import end from "./assets/audio/end.mp3";

import "./styles.scss";

const Sequence = () => {
  return (
    <Fragment>
      <Audio src={intro} />
      <Series>
        <Series.Sequence durationInFrames={37}>
          <Large />
        </Series.Sequence>
        <Series.Sequence durationInFrames={52}>
          <Stagger />
        </Series.Sequence>
        <Series.Sequence durationInFrames={45}>
          <Sliding />
        </Series.Sequence>
        <Series.Sequence durationInFrames={65}>
          <Pulse />
        </Series.Sequence>
        {scenes.slice(0, scenes.length - 1).map((scene, index) => (
          <Series.Sequence key={index} durationInFrames={90}>
            <Audio src={middle} />
            <Person {...scene} />
          </Series.Sequence>
        ))}
        {scenes.slice(scenes.length - 1).map((scene, index) => (
          <Series.Sequence key={index} durationInFrames={270}>
            <Audio src={end} />
            <Series>
              <Series.Sequence durationInFrames={90}>
                <Person {...scene} />
              </Series.Sequence>
              <Series.Sequence durationInFrames={180}>
                <Outro />
              </Series.Sequence>
            </Series>
          </Series.Sequence>
        ))}
      </Series>
    </Fragment>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
