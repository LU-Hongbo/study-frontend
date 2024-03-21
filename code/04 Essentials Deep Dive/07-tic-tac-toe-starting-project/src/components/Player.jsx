import {PLAYER} from "../constant.js";

function Player({symbol}) {
  const name = PLAYER[symbol];

  return (
    <li>
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
        <button>Edit</button>
      </span>
    </li>
  );
}

export default Player;
