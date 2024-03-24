// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestment(
  {
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  }
) {
  const result = [];
  let totalAmount = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interest = totalAmount * (expectedReturn / 100);
    totalAmount += interest + annualInvestment;
    result.push({
      year: i + 1,
      interest: interest,
      investment: annualInvestment,
      totalAmount: totalAmount
    });
  }

  return result;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
