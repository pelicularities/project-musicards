import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import germanDeck from "./decks/german.js";
import DeckGallery from "./components/DeckGallery";

function App() {
  const [deck, setDeck] = useState(germanDeck);

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Musicards</h1>
        <DeckGallery deck={deck} />
      </div>
    </BrowserRouter>
  );
}

export default App;
