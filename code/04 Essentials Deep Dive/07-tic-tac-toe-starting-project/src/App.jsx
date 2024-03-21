import Player from "./components/Player.jsx";
import {SYMBOL} from "./constant.js";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player symbol={SYMBOL.X}/>
          <Player symbol={SYMBOL.O}/>
        </ol>
      </div>
    </main>
  );
}

export default App;
