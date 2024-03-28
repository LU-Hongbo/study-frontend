import {useRef, useState} from "react";
import ResultModal from "./ResultModal.jsx";

function TimerChallenge({mode, time}) {
  const dialog = useRef();
  const timer = useRef();
  const timeInMS = time * 1000;
  const [remainingTime, setRemainingTime] = useState(timeInMS);
  const isActive = remainingTime > 0 && remainingTime < timeInMS;

  if (remainingTime <= 0) {
    onStop();
  }

  function onStart() {
    timer.current = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 10);
    }, 10);
  }

  function onStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function onReset() {
    setRemainingTime(timeInMS);
  }

  return (
    <>
      <ResultModal ref={dialog} time={time} remainingTime={remainingTime} onReset={onReset}/>
      <section className="challenge">
        <h2>{mode}</h2>
        <p className="challenge-time">
          {time} second{time > 1 ? "s" : ""}
        </p>
        {!isActive && (
          <>
            <button onClick={onStart}>Start Challenge</button>
            <p>Timer inactive</p>
          </>
        )}
        {isActive && (
          <>
            <button onClick={onStop}>Stop Challenge</button>
            <p className="active">Timer active</p>
          </>
        )}
      </section>
    </>
  );
}

export default TimerChallenge;
