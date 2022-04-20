import { BrowserRouter, Route, Switch } from "react-router-dom";

import SideNavbar from "./components/SideNavbar";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import FizzBuzz from "./pages/FizzBuzz";
import Magic8Ball from "./pages/Magic8Ball";
import Calculator from "./pages/Calculator";
import FunWithState from "./pages/FunWithState";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideNavbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/about" component={About} />
          <Route path="/fizz-buzz" component={FizzBuzz} />
          <Route path="/magic-8-ball" component={Magic8Ball} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/fun-with-state" component={FunWithState} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
