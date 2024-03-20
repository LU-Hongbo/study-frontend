import Player from "./components/Player.jsx";
import {PLAYER} from "./constants.js";
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
    if (gameTurns.length === 0) return "X";
    return gameTurns[0] === "X" ? "O" : "X";
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
          <Player initialName={PLAYER[0].name} symbol={PLAYER[0].symbol}/>
          <Player initialName={PLAYER[1].name} symbol={PLAYER[1].symbol}/>
        </ol>
        <GameBoard gameBoard={gameBoard} handleSelectSquare={handleSelectSquare}/>
      </div>
    </main>
  );
}

export default App;
