import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import DeckGallery from "./components/DeckGallery";

function App() {
  const defaultDeck = [
    {
      id: uuidv4(),
      front: "the apple",
      back: "der Apfel",
      correct: false,
    },
    {
      id: uuidv4(),
      front: "the bed",
      back: "das Bett",
      correct: false,
    },
    {
      id: uuidv4(),
      front: "the cat",
      back: "die Katze",
      correct: false,
    },
  ];
  const [deck, setDeck] = useState(defaultDeck);

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
