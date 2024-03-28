import {useRef, useState} from "react";

function Player() {
  const refName = useRef();
  const [name, setName] = useState(null);

  function handleClick() {
    setName(refName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {name ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={refName} />
        <button onClick={handleClick}>Set name</button>
      </p>
    </section>
  );
}

export default Player;
