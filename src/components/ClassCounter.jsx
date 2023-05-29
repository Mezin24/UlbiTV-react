import { Component } from 'react';

class ClassCounter extends Component {
  state = {
    counter: 0,
  };

  increment = () => {
    this.setState((prev) => ({ ...prev, counter: prev.counter + 1 }));
  };

  decrement = () => {
    this.setState((prev) => ({ ...prev, counter: prev.counter - 1 }));
  };

  render() {
    const { counter } = this.state;
    return (
      <>
        <h1>Counter: {counter}</h1>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.increment}>Increment</button>
      </>
    );
  }
}

export default ClassCounter;
