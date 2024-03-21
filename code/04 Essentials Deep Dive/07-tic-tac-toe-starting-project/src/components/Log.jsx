function Log({turns}) {
  return (
    <ol id="log">
      {turns.map(turn => (
        <li key={`${turn.rowIndex} ${turn.columnIndex}`}>
          {turn.symbol} clicked ({turn.rowIndex}, {turn.columnIndex})
        </li>
      ))}
    </ol>
  );
}

export default Log;
