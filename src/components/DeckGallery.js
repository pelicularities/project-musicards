import React, { useState, useEffect } from "react";
import Flashcard from "./Flashcard";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  deckGallery: {
    width: "95%",
    margin: "0 auto",
  },
  flashcardOverride: {
    width: "90% !important",
    margin: "0 auto",
  },
  toolbar: {
    width: "100%",
    maxWidth: "20rem",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-around",
  },
});

function DeckGallery({ deck }) {
  const classes = useStyles();
  const flashcards = deck.map((flashcard) => (
    <Grid item key={flashcard.id} xs={12} sm={6} md={4} lg={3} xl={2}>
      <Flashcard
        key={flashcard.id}
        flashcard={flashcard}
        className={classes.flashcardOverride}
      />
    </Grid>
  ));
  return (
    <Grid className={classes.deckGallery} container spacing={2}>
      <Grid item xs={12}>
        <div className={classes.toolbar}>
          <Link to="/play">
            <FontAwesomeIcon icon={faPlay} />
          </Link>
          <Link to="/cards/new">
            <FontAwesomeIcon icon={faPlus} />
          </Link>
        </div>
      </Grid>
      {flashcards}
    </Grid>
  );
}

export default DeckGallery;
