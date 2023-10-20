import "../Styles/nav.css";
import "../App.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import Counter from "./Counter";
const NavBar = function () {
  return (
    <div className="nav-counter">
      <nav className="counter-nav">
        <div className="counter-logo">
          <img
            className="counter-logo"
            src="/counter-logo.png "
            alt="The counter logo"
          ></img>
        </div>

        <ul className="nav-lists">
          <li className="nav-list">
            <Link className="nav-link " to="/">
              Home
            </Link>
          </li>
          <li>
            <NavLink className="nav-link " to="/counter">
              Enter App
            </NavLink>
          </li>
        </ul>
      </nav>

      {
        <main>
          <Outlet />
        </main>
      }
    </div>
  );
};
export default NavBar;
