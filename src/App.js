import React, { Component } from "react";
import CharacterSection from "./components/characters/CharacterSection";
import Hero from "./components/hero/Hero";
import MangaSection from "./components/manga/MangaSection";
import Navbar from "./components/navbar/Navbar";
import QuoteSection from "./components/quote/QuoteSection";
import WorksSection from "./components/works/WorksSection";

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
        <CharacterSection />
        <WorksSection />
      </>
    );
  }
}

export default App;
