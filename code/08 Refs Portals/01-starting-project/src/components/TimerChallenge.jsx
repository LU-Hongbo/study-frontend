function TimerChallenge({mode, time}) {
  return (
    <section className="challenge">
      <h2>{mode}</h2>
      <p className="challenge-time">
        {time} second{time > 1 ? "s" : ""}
      </p>
      <button>
        Start Challenge
      </button>
      <p>
        Timer inactive
      </p>
    </section>
  );
}

export default TimerChallenge;
