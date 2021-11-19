import React, { Component } from "react";
import Hero from "./components/hero/Hero";
import MangaSection from "./components/manga/MangaSection";
import Navbar from "./components/navbar/Navbar";
import QuoteSection from "./components/quote/QuoteSection";

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
        <QuoteSection />
        <MangaSection />
      </>
    );
  }
}

export default App;
