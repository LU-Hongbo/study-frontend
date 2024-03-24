import {useState} from "react";


function UserInput({userInput, onChange}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={event => {
              onChange("initialInvestment", event.target.value)
            }}
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={event => {
              onChange("annualInvestment", event.target.value)
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={event => {
              onChange("expectedReturn", event.target.value)
            }}
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={event => {
              onChange("duration", event.target.value)
            }}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
