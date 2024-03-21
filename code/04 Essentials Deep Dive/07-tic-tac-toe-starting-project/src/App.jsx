import Player from "./components/Player.jsx";
import {INIT_GAME_BOARD, SYMBOL} from "./constant.js";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";

function getGameBoard(gameTurns) {
  const board = [...INIT_GAME_BOARD].map(array => [...array]);
  for (const turn of gameTurns) {
    const {rowIndex, columnIndex, symbol} = turn;
    board[rowIndex][columnIndex] = symbol
  }
  return board;
}

function App() {
  const [symbol, setSymbol] = useState(SYMBOL.X);
  const [gameTurns, setGameTurns] = useState([]);
  const gameBoard = getGameBoard(gameTurns);

  function handleClickSquare(rowIndex, columnIndex) {
    setGameTurns(prevTurns => [
      {rowIndex: rowIndex, columnIndex: columnIndex, symbol: symbol},
      ...prevTurns
    ]);
    setSymbol(prevSymbol => prevSymbol === SYMBOL.X ? SYMBOL.O : SYMBOL.X);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player symbol={SYMBOL.X}/>
          <Player symbol={SYMBOL.O}/>
        </ol>
        <GameBoard board={gameBoard} onClickSquare={handleClickSquare} symbol={symbol}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
