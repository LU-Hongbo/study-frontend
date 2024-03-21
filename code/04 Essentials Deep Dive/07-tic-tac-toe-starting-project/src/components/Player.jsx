import {useState} from "react";

function Player({initialName, symbol, onChangeName}) {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    setIsEditing(false);
    onChangeName(symbol, name);
  }

  function handleOnChange(event) {
    setName(event.target.value);
  }

  if (isEditing) {
    return (
      <span className="player">
        <input type="text" value={name} required onChange={handleOnChange}/>
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleSave}>Save</button>
      </span>
    )
  }

  return (
    <span className="player">
      <span className="player-initialName">{name}</span>
      <span className="player-symbol">{symbol}</span>
      <button onClick={handleEdit}>Edit</button>
    </span>
  );
}

export default Player;
