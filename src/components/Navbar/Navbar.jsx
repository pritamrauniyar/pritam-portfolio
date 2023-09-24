import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <nav>
      <h1>
        <Link to="/" onClick={closeMenu}>
          My Portfolio
        </Link>
      </h1>
      <div className="menu-container">
        <button onClick={toggleMenu} className="toggle-navbar">
          ☰
        </button>

        <ul className={isOpen ? "navbar-ul navbar-ul-active" : "navbar-ul"}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/project" onClick={closeMenu}>
              Project
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
