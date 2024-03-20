import Player from "./components/Player.jsx";
import {PLAYER} from "./constants.js";
import GameBoard from "./components/GameBoard.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYER[0].name} symbol={PLAYER[0].symbol}/>
          <Player initialName={PLAYER[1].name} symbol={PLAYER[1].symbol}/>
        </ol>
        <GameBoard/>
      </div>
    </main>
  );
}

export default App;
