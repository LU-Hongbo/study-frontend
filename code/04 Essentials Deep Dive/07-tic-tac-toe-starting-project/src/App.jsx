import Player from "./components/Player.jsx";
import {INIT_GAME_BOARD, SYMBOL} from "./constant.js";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";

function App() {
  const [gameBoard, setGameBoard] = useState(INIT_GAME_BOARD);
  const [symbol, setSymbol] = useState(SYMBOL.X);

  function handleClickSquare(rowIndex, columnIndex) {
    setGameBoard(prevBoard => {
        const board = [...prevBoard].map(array => [...array]);
        board[rowIndex][columnIndex] = symbol;
        return board;
      }
    );
    setSymbol(prevSymbol => prevSymbol === SYMBOL.X ? SYMBOL.O : SYMBOL.X);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player symbol={SYMBOL.X}/>
          <Player symbol={SYMBOL.O}/>
        </ol>
        <GameBoard board={gameBoard} onClickSquare={handleClickSquare}/>
      </div>
    </main>
  );
}

export default App;
