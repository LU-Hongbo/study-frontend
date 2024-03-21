import {PLAYER} from "../constant.js";
import {useState} from "react";

function Player({symbol}) {
  const initialName = PLAYER[symbol];
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleOnChange(event) {
    setName(event.target.value);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <li>
        <span className="player">
          <input type="text" value={name} required onChange={handleOnChange}/>
          <span className="player-symbol">{symbol}</span>
          <button onClick={handleSave}>
            Save
          </button>
        </span>
      </li>
    );
  }
  return (
    <li>
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEdit}>
          Edit
        </button>
      </span>
    </li>
  );
}

export default Player;
