import React, { useState, useEffect } from "react";

function Flashcard({ flashcard }) {
  return (
    <div>
      <p>Front: {flashcard.back}</p>
      <p>Back: {flashcard.back}</p>
    </div>
  );
}

export default Flashcard;
