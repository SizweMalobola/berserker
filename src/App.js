import React, { Component } from "react";
import Hero from "./components/hero/Hero";
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
        <Hero />
      </>
    );
  }
}

export default App;
