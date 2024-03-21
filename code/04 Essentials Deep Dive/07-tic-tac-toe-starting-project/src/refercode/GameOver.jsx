function GameOver({winner, onRestart}) {
  let winnerText;
  if (winner) {
    winnerText = <p>{winner} won!</p>
  } else {
    winnerText = <p>It&apos;s a draw!</p>
  }
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winnerText}
      <button onClick={onRestart}>
        Restart
      </button>
    </div>
  );
}

export default GameOver;
