function Log({turns}) {
  return (
    <ol id="log">
      {turns.map(turn =>
        <li key={`${turn.rowIndex} ${turn.colIndex}`}>
          {turn.symbol} clicked ({turn.rowIndex},{turn.colIndex})
        </li>
      )}
    </ol>
  );
}

export default Log;
