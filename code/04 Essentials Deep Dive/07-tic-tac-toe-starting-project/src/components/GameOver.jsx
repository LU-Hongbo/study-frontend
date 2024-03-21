function GameOver({onRestart}) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <button onClick={onRestart}>
        Restart
      </button>
    </div>
  );
}

export default GameOver;
