import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles({
  addFlashcardForm: {
    width: "100%",
    maxWidth: "30rem",
    margin: "0 auto",
  },
  formInputs: {
    marginBottom: "1rem",
    display: "block",
  },
});

function NewCard({ deck, addFlashcard }) {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [redirectToMain, setRedirect] = useState(false);

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

  const handleAddFlashcard = () => {
    const newFlashcard = { id: uuidv4(), front: front, back: back };
    addFlashcard(deck, newFlashcard);
    setRedirect(true);
  };

  const classes = useStyles();
  return (
    <div>
      {redirectToMain && <Redirect to="/" />}
      <form className={classes.addFlashcardForm}>
        <TextField
          className={classes.formInputs}
          label="Front"
          required
          fullWidth
          variant="outlined"
          value={front}
          onChange={(e) => handleInputChange(e, setFront)}
        />
        <TextField
          className={classes.formInputs}
          label="Back"
          required
          fullWidth
          variant="outlined"
          value={back}
          onChange={(e) => handleInputChange(e, setBack)}
        />
        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={() => handleAddFlashcard()}
        >
          Add New Flashcard
        </Button>
      </form>
    </div>
  );
}

export default NewCard;
