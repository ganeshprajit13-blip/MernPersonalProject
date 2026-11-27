import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <h2>🌱CellSense</h2>
      <div><input type="search" placeholder="Search"/></div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;