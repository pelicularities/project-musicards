import React, { useState } from "react";
import Flashcard from "./Flashcard";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faChevronCircleLeft,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  playContainer: {
    display: "inline-block",
  },
  playDeck: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  playFlashcard: {
    margin: "1rem",
    width: "30rem",
  },
  playControls: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  red: {
    color: "#FF0000",
  },
  green: {
    color: "#00FF00",
  },
  grayLight: {
    color: "#C4c4c4",
  },
  clickable: {
    cursor: "pointer",
  },
});

function PlayDeck({ deck }) {
  const classes = useStyles();
  const [playthrough, setPlaythrough] = useState(
    deck.map((flashcard) => {
      return {
        ...flashcard,
        correct: false,
      };
    })
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [correctAttempts, setCorrectAttempts] = useState(0);
  const [deckComplete, setDeckComplete] = useState(false);

  const checkComplete = () => {
    if (countCorrect() === deck.length) setDeckComplete(true);
  };

  const nextCard = () => {
    let nextIndex = (currentIndex + 1) % deck.length;
    while (playthrough[nextIndex].correct) {
      if (allCorrect()) break;
      // if next card by index is already marked correct, skip it
      nextIndex = (nextIndex + 1) % deck.length;
    }
    setCurrentIndex(nextIndex);
  };

  const previousCard = () => {
    let previousIndex = (currentIndex + deck.length - 1) % deck.length;
    while (playthrough[previousIndex].correct) {
      if (allCorrect()) break;
      // if previous card by index is already marked correct, skip it
      previousIndex = (previousIndex + deck.length - 1) % deck.length;
    }
    setCurrentIndex(previousIndex);
  };

  const countCorrect = () => {
    return playthrough.reduce((score, flashcard) => {
      if (flashcard.correct) score++;
      return score;
    }, 0);
  };

  const countCardsLeft = () => deck.length - countCorrect();

  const allCorrect = () => {
    return countCorrect() === deck.length ? true : false;
  };

  const markCorrect = () => {
    const newPlaythroughArray = [...playthrough];
    newPlaythroughArray[currentIndex].correct = true;
    setPlaythrough(newPlaythroughArray);
    checkComplete();
    if (!deckComplete) {
      setAttempts(attempts + 1);
      setCorrectAttempts(correctAttempts + 1);
    }
    nextCard();
  };

  const markIncorrect = () => {
    if (!deckComplete) {
      setAttempts(attempts + 1);
    }
    nextCard();
  };

  const resetDeck = () => {
    const newPlaythrough = deck.map((flashcard) => {
      return {
        ...flashcard,
        correct: false,
      };
    });
    setPlaythrough(newPlaythrough);
    setCurrentIndex(0);
    setAttempts(0);
    setCorrectAttempts(0);
    setDeckComplete(false);
  };

  return (
    <div className={classes.playContainer}>
      <div>
        <Link to="/">Back to Card Overview</Link>
      </div>
      <div>Cards left: {countCardsLeft()}</div>
      <div>
        Cards correct: {countCorrect()}/{deck.length}
      </div>
      <div>
        Attempts: {correctAttempts}/{attempts}
      </div>

      <div>
        {deckComplete && <span>You've completed this deck!</span>}{" "}
        <Link to="#" onClick={resetDeck}>
          Reset Deck
        </Link>
      </div>
      <div className={classes.playDeck}>
        <FontAwesomeIcon
          icon={faChevronCircleLeft}
          size="3x"
          className={`${classes.grayLight} ${classes.clickable}`}
          onClick={previousCard}
        />
        <Flashcard
          flashcard={deck[currentIndex]}
          className={classes.playFlashcard}
        />
        <FontAwesomeIcon
          icon={faChevronCircleRight}
          size="3x"
          className={`${classes.grayLight} ${classes.clickable}`}
          onClick={nextCard}
        />
      </div>
      <div className={classes.playControls}>
        <FontAwesomeIcon
          icon={faTimesCircle}
          size="3x"
          className={`${classes.red} ${classes.clickable}`}
          onClick={markIncorrect}
        />
        <FontAwesomeIcon
          icon={faCheckCircle}
          size="3x"
          className={`${classes.green} ${classes.clickable}`}
          onClick={markCorrect}
        />
      </div>
    </div>
  );
}

export default PlayDeck;
