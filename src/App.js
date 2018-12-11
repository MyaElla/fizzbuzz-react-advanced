import React, { Component } from "react";
import Counter from "./components/Counter";
import "./App.css";

import { inject, observer } from "mobx-react";

@inject("CounterStore")
@observe 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
