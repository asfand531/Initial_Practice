import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/nav">About</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/form-examples">Contact</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/former">Former</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
