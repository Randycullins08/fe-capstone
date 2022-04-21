import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header-wrapper">
        <h1>Select A Widget</h1>
      </div>

      <div className="card-container">
        <div className="card">
          <div className="card-header">
            Swapi <hr />
          </div>
          <div className="card-body">
            Program to get data from Swapi
            <div className="overlay">
              <Link to="/swapi">Swapi</Link>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            Weather API <hr />
          </div>
          <div className="card-body">
            Get the weather here!
            <div className="overlay">
              <Link to="/weather-api">Weather Api</Link>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            FizzBuzz <hr />
          </div>
          <div className="card-body">
            <div>
              A program that prints the numbers from 1 to 100 and for multiples
              of '3' print “Fizz” instead of the number and for the multiples of
              '5' print “Buzz” and "FizzBuzz" whenever numbers that are
              multiples of both 3 and 5 are encountered
            </div>
            <div className="overlay">
              <Link to="/fizz-buzz">FizzBuzz</Link>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            Magic 8 Ball <hr />
          </div>
          <div className="card-body">
            <div>
              A program similar to using a magic 8 ball, will give you a
              prediction simply by clicking a button.
            </div>
            <div className="overlay">
              <Link to="/magic-8-ball">Magic 8 Ball</Link>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            Calculator <hr />
          </div>
          <div className="card-body">
            A Calculator program you can use in this app
            <div className="overlay">
              <Link to="/calculator">Calculator</Link>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            Fun With State <hr />
          </div>
          <div className="card-body">
            Widget to play around with different examples of using state.
            <div className="overlay">
              <Link to="/fun-with-state">Fun With State</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
