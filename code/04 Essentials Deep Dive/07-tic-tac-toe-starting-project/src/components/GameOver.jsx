function GameOver({winner, onRestart}) {
  let content
  if (winner) {
    content = <p>{winner} won!</p>
  } else {
    content = <p>It&apos;s a draw!</p>
  }

  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {content}
      <button onClick={onRestart}>
        Restart
      </button>
    </div>
  );
}

export default GameOver;
