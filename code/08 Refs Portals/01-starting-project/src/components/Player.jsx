import {useRef, useState} from "react";

function Player() {
  const refName = useRef();
  const [name, setName] = useState("unknown entity");

  function onClick() {
    setName(refName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {name}</h2>
      <p>
        <input type="text" ref={refName}/>
        <button onClick={onClick}>
          Set Name
        </button>
      </p>
    </section>
  );
}

export default Player;
