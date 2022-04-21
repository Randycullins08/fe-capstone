import { BrowserRouter, Route, Switch } from "react-router-dom";

import SideNavbar from "./components/SideNavbar";
import Dashboard from "./pages/Dashboard";
import Swapi from "./pages/Swapi";
import WeatherApi from "./pages/WeatherApi";
import FizzBuzz from "./pages/FizzBuzz";
import Magic8Ball from "./pages/Magic8Ball";
import Calculator from "./pages/Calculator";
import FunWithState from "./pages/FunWithState";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideNavbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/swapi" component={Swapi} />
          <Route path="/weather-api" component={WeatherApi} />
          <Route path="/fizz-buzz" component={FizzBuzz} />
          <Route path="/magic-8-ball" component={Magic8Ball} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/fun-with-state" component={FunWithState} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
