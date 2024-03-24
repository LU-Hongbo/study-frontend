import Header from "./components/Header.jsx";
import {useState} from "react";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const isValid = userInput.duration > 0;

  function handleChange(key, value) {
    setUserInput(prevInput => {
      return {
        ...prevInput,
        [key]: value
      }
    });
  }

  return (
    <>
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange}/>
      {isValid && <Results userInput={userInput}/>}
      {!isValid && <p className="center">Please input right value</p>}
    </>
  );
}

export default App;
