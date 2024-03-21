import Player from "./components/Player.jsx";
import {INIT_GAME_BOARD, MAX_LENGTH, PLAYER, SYMBOL, WIN_COMBINATIONS} from "./constant.js";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";

function getSymbol(gameTurns) {
  if (gameTurns.length === 0) return SYMBOL.X;
  return gameTurns[0].symbol === SYMBOL.X ? SYMBOL.O : SYMBOL.X;
}

function getGameBoard(gameTurns) {
  const board = [...INIT_GAME_BOARD].map(array => [...array]);
  for (const turn of gameTurns) {
    const {rowIndex, columnIndex, symbol} = turn;
    board[rowIndex][columnIndex] = symbol;
  }
  return board;
}

function getWinner(gameBoard, players) {
  let winner;
  for (const combination of WIN_COMBINATIONS) {
    const first = gameBoard[combination[0].row][combination[0].column];
    const second = gameBoard[combination[1].row][combination[1].column];
    const third = gameBoard[combination[2].row][combination[2].column];
    if (first && first === second && first === third) winner = players[first];
  }
  return winner;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYER);

  const gameBoard = getGameBoard(gameTurns);
  const currentSymbol = getSymbol(gameTurns);
  const winner = getWinner(gameBoard, players);
  const isDraw = gameTurns.length === MAX_LENGTH && !winner;

  function handleChangePlayerName(name) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [currentSymbol]: name
      }
    });
  }

  function handleClickSquare(rowIndex, columnIndex) {
    setGameTurns(prevTurns => [
      {rowIndex: rowIndex, columnIndex: columnIndex, symbol: currentSymbol},
      ...prevTurns
    ]);
  }

  function handleRestart() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player symbol={SYMBOL.X} onChangePlayerName={handleChangePlayerName}/>
          <Player symbol={SYMBOL.O} onChangePlayerName={handleChangePlayerName}/>
        </ol>
        {(winner || isDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <GameBoard board={gameBoard} onClickSquare={handleClickSquare}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
