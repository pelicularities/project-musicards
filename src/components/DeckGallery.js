import React, { useState, useEffect } from "react";
import Flashcard from "./Flashcard";

function DeckGallery({ deck }) {
  const flashcards = deck.map((flashcard) => (
    <Flashcard key={flashcard.id} flashcard={flashcard} />
  ));
  return <div>{flashcards}</div>;
}

export default DeckGallery;
