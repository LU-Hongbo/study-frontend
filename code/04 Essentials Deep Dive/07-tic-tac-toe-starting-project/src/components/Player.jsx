function Player({name, symbol}) {
  return (
    <span className="player">
      <span className="player-name">
        {name}
      </span>
      <span className="player-symbol">
        {symbol}
      </span>
    </span>
  );
}

export default Player;
