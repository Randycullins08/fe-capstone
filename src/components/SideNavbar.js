import { NavLink } from "react-router-dom";

export default function SideNavbar(props) {
  function logout() {
    props.logout(false);
  }

  return (
    <div className="side-navbar-container">
      <div className="user-wrapper">
        <i className="fas fa-user-astronaut"></i>
        <button onClick={logout}>Logout</button>
      </div>

      <div className="app-title-wrapper">
        <h3>My React Widgets</h3>
      </div>

      <div className="side-navbar-links-wrapper">
        <NavLink activeClassName="active" exact to="/">
          Main Dashboard
        </NavLink>

        <NavLink activeClassName="active" to="/swapi">
          Swapi
        </NavLink>

        <NavLink activeClassName="active" to="/weather-api">
          Weather Api
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

        <NavLink activeClassName="active" to="/fun-with-state">
          Fun With State
        </NavLink>

        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
      </div>
    </div>
  );
}
