import { useState, useEffect, useRef } from "react";
import { FaArrowDown, FaArrowUp, FaPlay, FaPause, FaRedo} from "react-icons/fa";
import "./styles.css";

export function Clock() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  const [timerLabel, setTimerLabel] = useState("Session");
  const [timeInSeconds, setTimeInSeconds] = useState(1500);

  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  const format = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
  const [timeLeft, setTimeLeft] = useState(format);

  const [startStop, setStartStop] = useState(false);
  const startStopClass = startStop ? "start" : "stop";

  const [breakStarted, setBreakStarted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    setTimeLeft(format);
    if (startStop && timeInSeconds === 0) {
      audioRef.current.play();
      setTimeout(() => {
        setBreakStarted((prevBreakStarted) => !prevBreakStarted);
      }, 3500);
    } else if (startStop && timeInSeconds != 0) {
      let timeout = setTimeout(() => {
        setTimeInSeconds((prevTimeInSeconds) => prevTimeInSeconds - 1);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [startStop, timeInSeconds]);

  useEffect(() => {
    if (breakStarted) {
      setTimerLabel("Break");
      setTimeInSeconds(breakLength * 60);
    } else {
      setTimerLabel("Session");
      setTimeInSeconds(sessionLength * 60);
    }
  }, [breakStarted]);

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
        if (timerLabel === "Session") {
          setTimeInSeconds(timeInSeconds - 60);
        }
      }
    } else if (event.currentTarget.id === "session-increment") {
      if (sessionLength + 1 <= 60) {
        setSessionLength(sessionLength + 1);
        if (timerLabel === "Session") {
          setTimeInSeconds(timeInSeconds + 60);
        }
      }
    } else if (event.currentTarget.id === "start_stop") {
      setStartStop((prevStartStop) => !prevStartStop);
    } else if (event.currentTarget.id === "reset") {
      setStartStop(false);
      setBreakStarted(false);
      setBreakLength(5);
      setSessionLength(25);
      setTimeInSeconds(1500);
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <div className="clockContainer">
    <div id="app-container">
      <h1>25 + 5 Clock</h1>
      <div id="break-session-flex">
        <div id="break-container">
          <div id="break-label">Break Length</div>
          <div id="break-data">
            <button id="break-decrement" onClick={handleClick}>
              <FaArrowDown size={30} />
            </button>
            <div id="break-length">{breakLength}</div>
            <button id="break-increment" onClick={handleClick}>
              <FaArrowUp size={30} />
            </button>
          </div>
        </div>
        <div id="session-container">
          <div id="session-label">Session Length</div>
          <div id="session-data">
            <button id="session-decrement" onClick={handleClick}>
              <FaArrowDown size={30} />
            </button>
            <div id="session-length">{sessionLength}</div>
            <button id="session-increment" onClick={handleClick}>
              <FaArrowUp size={30} />
            </button>
          </div>
        </div>
      </div>
      <div id="timer-container">
        <div id="timer-label">{timerLabel}</div>
        <div id="time-left">{timeLeft}</div>
        <audio
          ref={audioRef}
          src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"
          id="beep"
        />
      </div>
      <div>
        <button
          id="start_stop"
          onClick={handleClick}
        >
          <FaPlay size={30} className={startStopClass}/>
          <FaPause size={30} className={startStopClass} />
        </button>
        <button id="reset" onClick={handleClick}>
          <FaRedo size={30} />
        </button>
      </div>
      <p>
        Coded by{" "}
        <a href="https://github.com/ZacHorton" target="_blank">
          Zac Horton
        </a>
      </p>
    </div>
    </div>
  );
}