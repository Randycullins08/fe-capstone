import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SideNavbar from "./components/SideNavbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Swapi from "./pages/Swapi";
import WeatherApi from "./pages/WeatherApi";
import FizzBuzz from "./pages/FizzBuzz";
import Magic8Ball from "./pages/Magic8Ball";
import Calculator from "./pages/Calculator";
import FunWithState from "./pages/FunWithState";
import About from "./pages/About";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (isLoggedIn) => {
    setIsLoggedIn(isLoggedIn);
  };

  const unauthenticatedRoutes = () => {
    return (
      <>
        <Route
          path="/"
          render={(routeProps) => (
            <Login {...routeProps} handleLogin={handleLogin} />
          )}
        />
      </>
    );
  };

  const authenticatedRoutes = () => {
    return (
      <>
        <SideNavbar />
        <Route exact path="/" component={Dashboard} />
        <Route path="/swapi" component={Swapi} />
        <Route path="/weather-api" component={WeatherApi} />
        <Route path="/fizz-buzz" component={FizzBuzz} />
        <Route path="/magic-8-ball" component={Magic8Ball} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/fun-with-state" component={FunWithState} />
        <Route path="/about" component={About} />
      </>
    );
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {isLoggedIn ? authenticatedRoutes() : unauthenticatedRoutes()}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
