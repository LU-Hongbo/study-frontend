import Player from "./components/Player.jsx";
import {getSymbol, PLAYER, SYMBOL} from "./utils.js";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";

const gameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    const symbol = getSymbol(gameTurns);
    gameBoard[rowIndex][colIndex] = symbol;
    setGameTurns(prevTurns => [
        {rowIndex: rowIndex, colIndex: colIndex, symbol: symbol},
        ...prevTurns
      ]
    );
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYER.first} symbol={SYMBOL.X}/>
          <Player initialName={PLAYER.second} symbol={SYMBOL.O}/>
        </ol>
        <GameBoard board={gameBoard} handleSelectSquare={handleSelectSquare}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
