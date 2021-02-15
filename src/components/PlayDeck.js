import React, { useState, useEffect } from "react";
import Flashcard from "./Flashcard";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faChevronCircleLeft,
  faCheckCircle,
  faTimesCircle,
  faStickyNote,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles({
  playContainer: {
    display: "inline-block",
  },
  playDeck: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "30rem",
  },
  playFlashcard: {
    margin: "1rem",
    width: "20rem",
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playthrough, setPlaythrough] = useState([...deck]);

  playthrough.map((flashcard) => {
    return {
      ...flashcard,
      correct: false,
    };
  });

  const nextCard = () => {
    setCurrentIndex((currentIndex + 1) % deck.length);
  };

  const previousCard = () => {
    setCurrentIndex((currentIndex + deck.length - 1) % deck.length);
  };

  const countCorrect = () => {
    return playthrough.reduce((score, flashcard) => {
      if (flashcard.correct) score++;
      return score;
    }, 0);
  };
  const countCardsLeft = () => deck.length - countCorrect();

  const markCorrect = () => {
    const newPlaythroughArray = [...playthrough];
    newPlaythroughArray[currentIndex].correct = true;
    nextCard();
  };

  return (
    <div className={classes.playContainer}>
      <div>Cards left: {countCardsLeft()}</div>
      <div>
        Score: {countCorrect()}/{deck.length}
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
          className={classes.red}
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
