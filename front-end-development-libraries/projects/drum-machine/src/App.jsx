import { useState } from "react";
import "./App.css";
import DrumPad from "./components/DrumPad";

function App() {
  const [keyPressed, setKeyPressed] = useState(false);
  const [keyValue, setKeyValue] = useState(null);
  const handleKeyDown = (event) => {
    setKeyPressed(true);
    setKeyValue(event.key);
  };

  return (
    <div id="drum-machine" onKeyDown={handleKeyDown} tabIndex={0}>
      <div id="display"></div>
      <DrumPad
        drumID="heater1"
        audioID="Q"
        audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        keyPressed={keyPressed}
        keyValue={keyValue}
      />
      <DrumPad
        drumID="heater2"
        audioID="W"
        audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
        keyPressed={keyPressed}
        keyValue={keyValue}
      />
      <DrumPad
        drumID="heater3"
        audioID="E"
        audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
        keyPressed={keyPressed}
        keyValue={keyValue}
      />
      <DrumPad
        drumID="heater4"
        audioID="A"
        audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
        keyPressed={keyPressed}
        keyValue={keyValue}
      />
      <DrumPad
        drumID="clap"
        audioID="S"
        audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
        keyPressed={keyPressed}
        keyValue={keyValue}
      />
      <DrumPad
        drumID="openHH"
        audioID="D"
        audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
        keyPressed={keyPressed}
        keyValue={keyValue}
      />
      <DrumPad
        drumID="kickNHat"
        audioID="Z"
        audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        keyPressed={keyPressed}
        keyValue={keyValue}
      />
      <DrumPad
        drumID="kick"
        audioID="X"
        audioSrc="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        keyPressed={keyPressed}
        keyValue={keyValue}
      />
      <DrumPad
        drumID="closedHH"
        audioID="C"
        audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
        keyPressed={keyPressed}
        keyValue={keyValue}
      />
    </div>
  );
}

export default App;
