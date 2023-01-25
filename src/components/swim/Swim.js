import React, { useRef } from "react";
import ReactDOM from "react-dom";

import { Controller, Scene } from "react-scrollmagic";
import Sequence from "./imageSequence";
// import ImageArrays from "../swim/ImageArray";
// import SwimArray from "../swim/ImageArray";

export const Swim = () => {
  const ref = useRef();
  return (
    <div className="App">
      <Controller>
        <Scene duration="1200%" triggerHook="onLeave" pin>
          {progress => (
            <div style={{ height: "100vh", position: "relative" }}>
              <Sequence ref={ref} progress={progress} />
            </div>
          )}
        </Scene>
      <div>
        <p> thank you swim</p>
      </div>
      </Controller>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Swim />, rootElement);