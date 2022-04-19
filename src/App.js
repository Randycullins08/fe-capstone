import { BrowserRouter, Route, Switch } from "react-router-dom";

import TopNavbar from "./components/TopNavbar";
import SideNavbar from "./components/SideNavbar";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideNavbar />
        <Switch>
          <Route path="/home" component={Dashboard} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
