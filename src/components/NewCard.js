import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";
import NewStave from "./NewStave";

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
  const [hasFrontStave, setHasFrontStave] = useState(false);
  const [hasBackStave, setHasBackStave] = useState(false);

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

  const handleSwitchChange = (variable, setState) => {
    setState(!variable);
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
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={hasFrontStave}
                onChange={() =>
                  handleSwitchChange(hasFrontStave, setHasFrontStave)
                }
                color="primary"
                name="hasFrontStave"
              />
            }
            label="Add Music Stave to Front"
          />
        </FormGroup>
        {hasFrontStave && <NewStave />}
        <TextField
          className={classes.formInputs}
          label="Back"
          required
          fullWidth
          variant="outlined"
          value={back}
          onChange={(e) => handleInputChange(e, setBack)}
        />
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={hasBackStave}
                onChange={() =>
                  handleSwitchChange(hasBackStave, setHasBackStave)
                }
                color="primary"
                name="hasBackStave"
              />
            }
            label="Add Music Stave to Back"
          />
        </FormGroup>
        {hasBackStave && <NewStave />}
        <div>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => handleAddFlashcard()}
          >
            Add New Flashcard
          </Button>
        </div>
      </form>
    </div>
  );
}

export default NewCard;
