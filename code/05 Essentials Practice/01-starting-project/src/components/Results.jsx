import {calculateInvestment, formatter} from "../util/investment.js";

function Results({userInput}) {
  const resultList = calculateInvestment(userInput);
  const firstYear = resultList[0];
  const annualInvestment = firstYear.investment;
  const initialInvestment = firstYear.totalAmount - (firstYear.interest + annualInvestment);

  return (
    <table id="result">
      <thead>
      <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
      </thead>
      <tbody>
      {resultList.map(result => {
        const year = result.year;
        // Investment Value
        const totalAmount = result.totalAmount;
        // Interest (Year)
        const annualInterest = result.interest;
        // Invested Capital
        const totalInvestment = initialInvestment + year * annualInvestment;
        // Total Interest
        const totalInterest = totalAmount - totalInvestment;

        return (
          <tr>
            <td>{year}</td>
            <td>{formatter.format(totalAmount)}</td>
            <td>{formatter.format(annualInterest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalInvestment)}</td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
}

export default Results;
