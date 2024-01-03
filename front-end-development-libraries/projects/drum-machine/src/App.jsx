import { useState, useRef } from "react";
import "./App.css";
import AudioElement from "./components/AudioElement";

function App() {
  const [btnClicked, setbtnClicked] = useState(false);

  const handleClick = () => {
    setbtnClicked((prevbtnClicked) => !prevbtnClicked);
  };

  return (
    <>
      <div id="drum-machine">
        <div id="display"></div>
        <div className="drum-pad" id="heater-1" onClick={handleClick}>
          Q
          <AudioElement
            btnClicked={btnClicked}
            className="clip"
            id="Q"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          />
        </div>
        <div className="drum-pad" id="heater-2" onClick={handleClick}>
          W
          <AudioElement
            btnClicked={btnClicked}
            className="clip"
            id="W"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          />
        </div>
      </div>
    </>
  );
}

export default App;
