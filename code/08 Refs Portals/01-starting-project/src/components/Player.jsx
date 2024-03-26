import {useState, useRef} from "react";

export default function Player() {
  const refName = useRef();
  const [name, setName] = useState(null);

  function handleClick() {
    setName(refName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {name ?? "unknown entity"}</h2>
      <p>
        <input ref={refName} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
