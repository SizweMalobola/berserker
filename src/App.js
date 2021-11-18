import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
      </>
    );
  }
}

export default App;
