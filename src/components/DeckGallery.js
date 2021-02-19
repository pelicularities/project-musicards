import React from "react";
import Flashcard from "./Flashcard";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
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
    maxWidth: "40rem",
    margin: "0 auto 1rem auto",
    display: "flex",
    justifyContent: "space-between",
  },
  iconMargin: {
    marginRight: "0.5rem",
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
            <Button variant="contained" color="primary" disableElevation>
              <FontAwesomeIcon icon={faPlay} className={classes.iconMargin} />{" "}
              Play Deck
            </Button>
          </Link>
          <Link to="/cards/new">
            <Button variant="contained" color="secondary" disableElevation>
              <FontAwesomeIcon icon={faPlus} className={classes.iconMargin} />{" "}
              Add Card
            </Button>
          </Link>
        </div>
      </Grid>
      {flashcards}
    </Grid>
  );
}

export default DeckGallery;
