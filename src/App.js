import { BrowserRouter, Route, Switch } from "react-router-dom";

import TopNavbar from "./components/TopNavbar";
import SideNavbar from "./components/SideNavbar";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import FizzBuzz from "./pages/FizzBuzz";
import Magic8Ball from "./pages/Magic8Ball";
import Calculator from "./pages/Calculator";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideNavbar />
        <Switch>
          <Route path="/home" component={Dashboard} />
          <Route path="/about" component={About} />
          <Route path="/fizz-buzz" component={FizzBuzz} />
          <Route path="/magic-8-ball" component={Magic8Ball} />
          <Route path="/calculator" component={Calculator} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
