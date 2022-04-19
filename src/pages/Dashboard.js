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
            FizzBuzz <hr />
          </div>
          <div className="card-body">
            <img
              alt="widget-img"
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80"
            />
            Widget to do FizzBuzz
            <div className="overlay">Hello</div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            FizzBuzz <hr />
          </div>
          <div className="card-body">
            <img
              alt="widget-img"
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80"
            />
            Widget to do FizzBuzz
            <div className="overlay">Hello</div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            FizzBuzz <hr />
          </div>
          <div className="card-body">
            <img
              alt="widget-img"
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80"
            />
            Widget to do FizzBuzz
            <div className="overlay">Hello</div>
          </div>
        </div>
      </div>
    </div>
  );
}
