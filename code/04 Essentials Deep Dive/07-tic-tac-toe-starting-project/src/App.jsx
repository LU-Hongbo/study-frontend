import Player from "./components/Player.jsx";
import {PLAYER} from "./constants.js";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={PLAYER[0].name} symbol={PLAYER[0].symbol}/>
          <Player name={PLAYER[1].name} symbol={PLAYER[1].symbol}/>
        </ol>
      </div>
    </main>
  );
}

export default App;
