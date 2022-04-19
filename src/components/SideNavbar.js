import { NavLink } from "react-router-dom";

export default function SideNavbar() {
  return (
    <div className="side-navbar-container">
      <div className="app-title-wrapper">
        <h3>My React Widgets</h3>
      </div>

      <div className="side-navbar-links-wrapper">
        <NavLink activeClassName="active" to="/home">
          Main Dashboard
        </NavLink>
        <NavLink activeClassName="active" to="/fizz-buzz">
          FizzBuzz
        </NavLink>
        <NavLink activeClassName="active" to="/magic-8-ball">
          Magic 8 Ball
        </NavLink>
        <NavLink activeClassName="active" to="/calculator">
          Calculator
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
      </div>
    </div>
  );
}
