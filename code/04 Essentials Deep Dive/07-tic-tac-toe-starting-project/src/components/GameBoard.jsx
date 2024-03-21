function GameBoard({board, onClickSquare}) {
  return (
    <div id="game-board">
      <ol>
        {board.map((row, rowIndex) =>
          <li key={rowIndex}>
            <ol>
              {row.map((symbol, columnIndex) => (
                <li key={columnIndex}>
                  <button
                    disabled={symbol}
                    onClick={() => onClickSquare(rowIndex, columnIndex)}
                  >
                    {symbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        )}
      </ol>
    </div>
  );
}

export default GameBoard;
