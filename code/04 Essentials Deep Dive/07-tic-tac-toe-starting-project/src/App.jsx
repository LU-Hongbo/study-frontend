import Player from "./components/Player.jsx";
import {INIT_GAME_BOARD, MAX_LENGTH, PLAYERS, SYMBOL, WINNING_COMBINATIONS} from "./constant.js";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";

function getGameBoard(turns) {
  let board = [...INIT_GAME_BOARD.map(array => [...array])];
  for (const turn of turns) {
    const {rowIndex, colIndex, symbol} = turn;
    board[rowIndex][colIndex] = symbol;
  }
  return board;
}

function getSymbol(gameTurns) {
  if (gameTurns.length === 0) return SYMBOL.X;
  return gameTurns[0].symbol === SYMBOL.X ? SYMBOL.O : SYMBOL.X;
}

function getWinner(board, players) {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const first = board[combination[0].row][combination[0].column];
    const second = board[combination[1].row][combination[1].column];
    const third = board[combination[2].row][combination[2].column];
    if (first && first === second && first === third) winner = players[first];
  }
  return winner;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

  const currentSymbol = getSymbol(gameTurns);
  const gameBoard = getGameBoard(gameTurns);
  const winner = getWinner(gameBoard, players);
  const isDraw = gameTurns.length === MAX_LENGTH && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => [
        {rowIndex: rowIndex, colIndex: colIndex, symbol: currentSymbol},
        ...prevTurns
      ]
    );
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerChangeName(symbol, newName) {
    setPlayers(prevPlayers => ({
      ...prevPlayers,
      [symbol]: newName
    }));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol={SYMBOL.X}
            isActive={currentSymbol === SYMBOL.X}
            onChangeName={handlePlayerChangeName}
          />
          <Player
            initialName={PLAYERS.O}
            symbol={SYMBOL.O}
            isActive={currentSymbol === SYMBOL.O}
            onChangeName={handlePlayerChangeName}
          />
        </ol>
        {(winner || isDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <GameBoard board={gameBoard} onSelectSquare={handleSelectSquare}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
