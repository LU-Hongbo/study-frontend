import Header from "./components/Header.jsx";
import {useState} from "react";
import UserInput from "./components/UserInput.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

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
    </>
  );
}

export default App;
