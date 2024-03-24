import logo from "../assets/investment-calculator-logo.png";

function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Loging showing a money bag"/>
      <h1>Investment Calculator</h1>
    </header>
  );
}

export default Header;
