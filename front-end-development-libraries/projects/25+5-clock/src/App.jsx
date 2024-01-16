import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeInSeconds, setTimeInSeconds] = useState(1500);
  const [timer, setTimer] = useState();
  const [timerStarted, setTimerStarted] = useState(false);
  const intervalId = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    setTimer(
      `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
    );
    if (timeInSeconds === 0) {
      audioRef.current.play();
    }
  }, [timeInSeconds]);

  useEffect(() => {
    if (timerStarted) {
      intervalId.current = setInterval(() => {
        setTimeInSeconds((prevTimeInSeconds) => prevTimeInSeconds - 1);
      }, 1000);
    } else {
      clearInterval(intervalId.current);
    }
  }, [timerStarted]);

  const handleClick = (event) => {
    if (event.currentTarget.id === "break-decrement") {
      if (breakLength - 1 > 0) {
        setBreakLength(breakLength - 1);
      }
    } else if (event.currentTarget.id === "break-increment") {
      if (breakLength + 1 <= 60) {
        setBreakLength(breakLength + 1);
      }
    } else if (event.currentTarget.id === "session-decrement") {
      if (sessionLength - 1 > 0) {
        setSessionLength(sessionLength - 1);
        setTimeInSeconds(timeInSeconds - 60);
      }
    } else if (event.currentTarget.id === "session-increment") {
      if (sessionLength + 1 <= 60) {
        setSessionLength(sessionLength + 1);
        setTimeInSeconds(timeInSeconds + 60);
      }
    } else if (event.currentTarget.id === "start_stop") {
      setTimerStarted((prevTimerStarted) => !prevTimerStarted);
    } else if (event.currentTarget.id === "reset") {
      setBreakLength(5);
      setSessionLength(25);
      setTimeInSeconds(1500);
      setTimerStarted(false);
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
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
        <audio
          ref={audioRef}
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"
          id="beep"
        />
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
        Coded by{" "}
        <a href="https://github.com/ZacHorton" target="_blank">
          Zac Horton
        </a>
      </p>
    </div>
  );
}

export default App;
