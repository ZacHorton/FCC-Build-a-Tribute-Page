import { useState } from "react";
import "./App.css";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timer, setTimer] = useState(sessionLength);

  const handleClick = (event) => {
    if (event.currentTarget.id === "break-decrement") {
      setBreakLength(breakLength - 1);
    } else if (event.currentTarget.id === "break-increment") {
      setBreakLength(breakLength + 1);
    } else if (event.currentTarget.id === "session-decrement") {
      setSessionLength(sessionLength - 1);
    } else if (event.currentTarget.id === "session-increment") {
      setSessionLength(sessionLength + 1);
    } else if (event.currentTarget.id === "reset") {
      setBreakLength(5);
      setSessionLength(25);
    }
  };

  return (
    <div id="app-container">
      <h1>25 + 5 Clock</h1>

      <div id="break-session-flex">
        <div id="break-container">
          <div id="break-label">Break Length</div>
          <div id="break-data">
            <button id="break-decrement" onClick={handleClick}>
              <i className="fa fa-arrow-down fa-2x" />
            </button>
            <div id="break-length">{breakLength}</div>
            <button id="break-increment" onClick={handleClick}>
              <i className="fa fa-arrow-up fa-2x" />
            </button>
          </div>
        </div>

        <div id="session-container">
          <div id="session-label">Session Length</div>
          <div id="session-data">
            <button id="session-decrement" onClick={handleClick}>
              <i className="fa fa-arrow-down fa-2x" />
            </button>
            <div id="session-length">{sessionLength}</div>
            <button id="session-increment" onClick={handleClick}>
              <i className="fa fa-arrow-up fa-2x" />
            </button>
          </div>
        </div>
      </div>

      <div id="timer-container">
        <div id="timer-label">Session</div>
        <div id="time-left">{timer}</div>
      </div>

      <div>
        <button id="start_stop" onClick={handleClick}>
          <i className="fa fa-play fa-2x" />
          <i className="fa fa-pause fa-2x" />
        </button>
        <button id="reset" onClick={handleClick}>
          <i className="fa fa-refresh fa-2x" />
        </button>
      </div>

      <p>
        Coded by <a href="https://github.com/ZacHorton" target="_blank">Zac Horton</a>
      </p>
    </div>
  );
}

export default App;
