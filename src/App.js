import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import germanDeck from "./decks/german.js";
import DeckGallery from "./components/DeckGallery";
import PlayDeck from "./components/PlayDeck";
import NewCard from "./components/NewCard";

function App() {
  const [deck, setDeck] = useState(germanDeck);

  const addFlashcard = (deck, flashcard) => {
    const newDeck = [...deck];
    newDeck.push(flashcard);
    setDeck(newDeck);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Musicards</h1>
        <Route exact path="/" render={() => <DeckGallery deck={deck} />} />
        <Route exact path="/play" render={() => <PlayDeck deck={deck} />} />
        <Route
          exact
          path="/cards/new"
          render={() => <NewCard deck={deck} addFlashcard={addFlashcard} />}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
