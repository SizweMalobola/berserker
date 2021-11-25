import React, { Component } from "react";
import CharacterSection from "./components/characters/CharacterSection";
import Footer from "./components/footer/Footer";
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
      <div id="App">
        <Navbar />
        <Hero />
        <QuoteSection />
        <MangaSection />
        <CharacterSection />
        <WorksSection />
        <Footer />
      </div>
    );
  }
}

export default App;
