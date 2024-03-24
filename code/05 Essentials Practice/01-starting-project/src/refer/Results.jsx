import {calculateInvestment, formatter} from "../util/investment.js";

function Results({input}) {
  const resultList = calculateInvestment(input);
  const firstYear = resultList[0]
  const initialInvestment = firstYear.totalAmount - firstYear.investment - firstYear.interest;
  const annualInvestment = firstYear.investment;

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
        // Investment Value
        const totalAmount = result.totalAmount;
        // Interest (Year)
        const annualInterest = result.interest;
        // Invested Capital
        const totalInvestment = initialInvestment + annualInvestment * result.year;
        // Total Interest
        const totalInterest = totalAmount - totalInvestment;

        return (
          <tr key={result.year}>
            <td>{result.year}</td>
            <td>{formatter.format(totalAmount)}</td>
            <td>{formatter.format(annualInterest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalInvestment)}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  );
}

export default Results;
