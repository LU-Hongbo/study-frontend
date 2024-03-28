import {useRef, useState} from "react";

function Player() {
  const input = useRef();
  const [name, setName] = useState("unknown entity");

  function onClick() {
    setName(input.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {name}</h2>
      <p>
        <input type="text" ref={input}/>
        <button onClick={onClick}>
          Set Name
        </button>
      </p>
    </section>
  );
}

export default Player;
