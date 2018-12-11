import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/actions";
import fizzBuzzChecker from "../utils/fizzBuzzChecker";
class Counter extends Component {
  render() {
  // makeIncrementer = amount => () =>
  //   this.setState(prevState => {
  //     const newCount = prevState.count + amount

  //     if ( newCount > 1 ) {
  //       return {count: newCount}
  //     }

  //   });

  // increment = this.makeIncrementer(1);
  // decrement = this.makeIncrementer(-1);

    return <div>
        <button onClick={this.props.count > 1 ? this.props.decrement : "disabled"}>-</button>
        <p>Current count: {fizzBuzzChecker(this.props.count)}</p>
        <button onClick={this.props.increment}>+</button>
      </div>;
  }
}

const mapStateToProps = state => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
