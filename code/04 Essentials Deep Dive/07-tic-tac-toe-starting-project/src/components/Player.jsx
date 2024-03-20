import {useState} from "react";

function Player({name, symbol}) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <span className="player">
        <input type="text"/>
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleSave}>Save</button>
      </span>
    )
  }

  return (
    <span className="player">
      <span className="player-name">{name}</span>
      <span className="player-symbol">{symbol}</span>
      <button onClick={handleEdit}>Edit</button>
    </span>
  );
}

export default Player;
