import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player/>
      <div id="challenges">
        <TimerChallenge mode="easy" time="1"/>
        <TimerChallenge mode="not easy" time="5"/>
        <TimerChallenge mode="getting tough" time="10"/>
        <TimerChallenge mode="pros only" time="15"/>
      </div>
    </>
  );
}

export default App;
