import Player from "./components/Player.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player/>
          <Player/>
        </ol>
      </div>
    </main>
  );
}

export default App;
