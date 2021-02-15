import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import germanDeck from "./decks/german.js";
import DeckGallery from "./components/DeckGallery";
import PlayDeck from "./components/PlayDeck";

function App() {
  const [deck, setDeck] = useState(germanDeck);

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Musicards</h1>
        <Route exact path="/" render={() => <DeckGallery deck={deck} />} />
        <Route exact path="/play" render={() => <PlayDeck deck={deck} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
