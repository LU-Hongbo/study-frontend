import logo from "../assets/investment-calculator-logo.png"

function Header() {
  return (
    <header id="header">
      <img src={logo} alt="investment calculator"/>
      <h1>Investment Calculator</h1>
    </header>
  );
}

export default Header;
