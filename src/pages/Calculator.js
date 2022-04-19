import { Component } from "react";
import { evaluate } from "mathjs";

import Input from "../components/Input";
import Button from "../components/Button";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      summary: "",
    };

    this.ops = [
      ["7", "8", "9", "/"],
      ["4", "5", "6", "*"],
      ["1", "2", "3", "+"],
      ["^", "0", ".", "-"],
    ];

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val) {
    if (this.state.summary) {
      this.setState({
        input: val,
        summary: "",
      });
    } else {
      this.setState((state) => ({
        input: state.input + val,
      }));
    }
  }

  handleEqual = () => {
    const summary = evaluate(this.state.input);
    this.setState({
      input: summary,
      summary,
    });
  };

  handleClear = () => {
    this.setState({
      input: "",
    });
  };

  renderButtons() {
    return this.ops.map((row, idx) => {
      return (
        <div key={idx} className="row">
          {row.map((char) => {
            return (
              <Button key={char} handleChange={this.handleChange}>
                {char}
              </Button>
            );
          })}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="calculator-container">
        <div className="calculator-header">
          <h1>Calculator</h1>
        </div>
        <div className="calculator-wrapper">
          <Input input={this.state.input} />

          {this.renderButtons()}

          <div className="row">
            <Button label="clear-btn" handleChange={this.handleClear}>
              Clear
            </Button>

            <Button label="equal-btn" handleChange={this.handleEqual}>
              =
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
