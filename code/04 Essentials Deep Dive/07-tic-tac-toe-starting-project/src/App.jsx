import Player from "./components/Player.jsx";
import {INIT_GAME_BOARD, MAX_LENGTH, PLAYER, SYMBOL, WIN_COMBINATIONS} from "./constant.js";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";

function getGameBoard(gameTurns) {
  const board = [...INIT_GAME_BOARD].map(array => [...array]);
  for (const turn of gameTurns) {
    const {rowIndex, columnIndex, symbol} = turn;
    board[rowIndex][columnIndex] = symbol
  }
  return board;
}

function getSymbol(gameTurns) {
  if (gameTurns.length === 0) return SYMBOL.X;
  return gameTurns[0].symbol === SYMBOL.X ? SYMBOL.O : SYMBOL.X;
}

function getWinner(gameBoard) {
  let winner;
  for (let combination of WIN_COMBINATIONS) {
    const first = gameBoard[combination[0].row][combination[0].column];
    const second = gameBoard[combination[1].row][combination[1].column];
    const third = gameBoard[combination[2].row][combination[2].column];
    if (first && first === second && first === third) winner = PLAYER[first];
  }
  return winner;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const gameBoard = getGameBoard(gameTurns);
  const winner = getWinner(gameBoard);
  const isDraw = gameTurns.length === MAX_LENGTH && !winner;

  function handleClickSquare(rowIndex, columnIndex) {
    setGameTurns(prevTurns => [
      {rowIndex: rowIndex, columnIndex: columnIndex, symbol: getSymbol(gameTurns)},
      ...prevTurns
    ]);
  }

  function handleOnRestart() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player symbol={SYMBOL.X} isActive={getSymbol(gameTurns) === SYMBOL.X}/>
          <Player symbol={SYMBOL.O} isActive={getSymbol(gameTurns) === SYMBOL.O}/>
        </ol>
        {(winner || isDraw) && <GameOver winner={winner} onRestart={handleOnRestart}/>}
        <GameBoard board={gameBoard} onClickSquare={handleClickSquare}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
