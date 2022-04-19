import { BrowserRouter, Route, Switch } from "react-router-dom";

import TopNavbar from "./components/TopNavbar";
import SideNavbar from "./components/SideNavbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideNavbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
