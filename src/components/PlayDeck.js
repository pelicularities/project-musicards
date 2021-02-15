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
});

function PlayDeck({ deck }) {
  const classes = useStyles();
  const [currentCard, setCurrentCard] = useState(deck[0]);
  return (
    <div className={classes.playContainer}>
      <div className={classes.playDeck}>
        <FontAwesomeIcon
          icon={faChevronCircleLeft}
          size="3x"
          className={classes.grayLight}
        />
        <Flashcard flashcard={currentCard} className={classes.playFlashcard} />
        <FontAwesomeIcon
          icon={faChevronCircleRight}
          size="3x"
          className={classes.grayLight}
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
          className={classes.green}
        />
      </div>
    </div>
  );
}

export default PlayDeck;
