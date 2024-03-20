import Player from "./components/Player.jsx";
import {getSymbol, PLAYER, SYMBOL} from "./utils.js";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./Log.jsx";

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
        {
          symbol: symbol,
          rowIndex: rowIndex,
          colIndex: colIndex
        },
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
        <GameBoard gameBoard={gameBoard} handleSelectSquare={handleSelectSquare}/>
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
