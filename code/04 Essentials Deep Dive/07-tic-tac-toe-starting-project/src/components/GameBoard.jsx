import {useState} from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button>
                </button>
                {playerSymbol}
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
