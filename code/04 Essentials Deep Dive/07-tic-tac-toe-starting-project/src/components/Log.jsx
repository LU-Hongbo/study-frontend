function Log({gameTurns}) {
  return (
    <ol id="log">
      {gameTurns.map(turn =>
        <li>
          {turn.symbol} clicked ({turn.rowIndex},{turn.colIndex})
        </li>
      )}
    </ol>
  );
}

export default Log;
