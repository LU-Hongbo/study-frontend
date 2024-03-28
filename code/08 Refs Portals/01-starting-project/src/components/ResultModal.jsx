import {forwardRef, useImperativeHandle, useRef} from "react";

const ResultModal = forwardRef(function ResultModal({time, remainingTime, onReset}, ref) {
  const dialog = useRef();

  const isLost = remainingTime <= 0;
  const timeInMS = time * 1000;
  const fixedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = (timeInMS - remainingTime) / timeInMS * 100;

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    }
  })

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>{isLost ? "you lost" : `your score is ${score}`}</h2>
      <p>
        The target time was <strong>{time} second{time > 1 ? "s" : ""}.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{fixedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
