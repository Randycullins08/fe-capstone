import { Link } from "react-router-dom";

export default function SideNavbar() {
  return (
    <div className="side-navbar-container">
      <div className="app-title-wrapper">
        <h3>My React Widgets</h3>
      </div>

      <div className="side-navbar-links-wrapper">
        <Link>Main Dashboard</Link>
        <Link>About</Link>
      </div>
    </div>
  );
}
