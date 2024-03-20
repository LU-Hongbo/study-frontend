import Player from "./components/Player.jsx";
import {PLAYER, SYMBOL} from "./utils.js";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";

const gameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  function getSymbol() {
    if (gameTurns.length === 0) return SYMBOL.X;
    return gameTurns[0] === SYMBOL.X ? SYMBOL.O : SYMBOL.X;
  }

  function handleSelectSquare(row, col) {
    const symbol = getSymbol();

    gameBoard[row][col] = symbol;
    setGameTurns(prevTurns => {
      return [
        {
          symbol: symbol,
          row: row,
          col: col
        },
        ...prevTurns
      ];
    });
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
    </main>
  );
}

export default App;
