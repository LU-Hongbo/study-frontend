import {useRef, useState} from "react";
import ResultModal from "./ResultModal.jsx";

function TimerChallenge({mode, time}) {
  const timer = useRef();
  const dialog = useRef();

  const timeInMS = time * 1000;
  const [remainingTime, setRemainingTime] = useState(timeInMS);
  const isActive = remainingTime > 0 && remainingTime < timeInMS;

  if (remainingTime <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function onReset() {
   setRemainingTime(timeInMS);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
      <ResultModal ref={dialog} time={time} remainingTime={remainingTime} onReset={onReset}/>
      <section className="challenge">
        <h2>{mode}</h2>
        <p className="challenge-time">
          {time} second{time > 1 ? "s" : ""}
        </p>
        <button onClick={isActive ? handleStop : handleStart}>
          {isActive ? "Stop Challenge" : "Start Challenge"}
        </button>
        <p>
          {isActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
