import {PLAYER} from "../constant.js";
import {useState} from "react";

function Player({symbol, onChangePlayerName}) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(PLAYER[symbol]);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    setIsEditing(false);
    onChangePlayerName(name);
  }

  if (isEditing) {
    return (
      <span className="player">
        <input type="text" required value={name} onChange={handleChange}/>
        <span className="player-symbol">
          {symbol}
        </span>
        <button onClick={handleSave}>
          Save
        </button>
      </span>
    );
  }

  return (
    <span className="player">
      <span className="player-name">
        {name}
      </span>
      <span className="player-symbol">
        {symbol}
      </span>
      <button onClick={handleEdit}>
        Edit
      </button>
    </span>
  );
}

export default Player;
