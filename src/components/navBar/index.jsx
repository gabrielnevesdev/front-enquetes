import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/create">Create Quiz</Link>
        </li>
        <li>
          <Link to="/list">List Quiz</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;