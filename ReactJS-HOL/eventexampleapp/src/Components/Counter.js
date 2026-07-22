import React, { Component } from "react";

class Counter extends Component {

  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  sayHello = () => {
    alert("Hello! Have a nice day.");
  };

  sayWelcome = (message) => {
    alert(message);
  };

  handleIncrement = () => {
    this.increment();
    this.sayHello();
  };

  handlePress = () => {
    alert("I was clicked");
  };

  render() {

    return (

      <div>

        <h2>Counter Value: {this.state.count}</h2>

        <button onClick={this.handleIncrement}>
          Increment
        </button>

        <button onClick={this.decrement}>
          Decrement
        </button>

        <br /><br />

        <button
          onClick={() => this.sayWelcome("Welcome")}
        >
          Say Welcome
        </button>

        <br /><br />

        <button onClick={this.handlePress}>
          OnPress
        </button>

      </div>

    );

  }

}

export default Counter;