import {useRef, useState} from "react";
import ResultModal from "./ResultModal.jsx";

function TimerChallenge({title, targetTime}) {
  const timer = useRef();
  const dialog = useRef();

  const targetTimeInMS = targetTime * 1000;
  const [remainingTime, setRemainingTime] = useState(targetTimeInMS);
  const isActive = remainingTime > 0 && remainingTime < targetTimeInMS;

  if (remainingTime <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setRemainingTime(targetTimeInMS);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setRemainingTime(prevRemainingTime => prevRemainingTime - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} remainingTime={remainingTime} onReset={handleReset}/>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isActive ? handleStop : handleStart}>
            {isActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={isActive ? "active" : undefined}>
          {isActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
