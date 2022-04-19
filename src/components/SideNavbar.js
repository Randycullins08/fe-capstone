import { Link } from "react-router-dom";

export default function SideNavbar() {
  return (
    <div className="side-navbar-container">
      <div className="app-title-wrapper">
        <h3>My React Widgets</h3>
      </div>

      <div className="side-navbar-links-wrapper">
        <Link to="/home">Main Dashboard</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}
