import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";
import NewStave from "./NewStave";
import Stave from "./Stave";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  addFlashcardForm: {
    width: "80%",
    maxWidth: "40rem",
    margin: "0 auto",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "40rem",
    margin: "0.5rem auto 1rem auto",
  },
  formInputs: {
    marginTop: "3rem",
    marginBottom: "0.5rem",
    display: "block",
  },
  iconMargin: {
    marginRight: "0.5rem",
  },
  marginTop: {
    marginTop: "3rem",
  },
});

function NewCard({ deck, addFlashcard }) {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [frontText, setFrontText] = useState("");
  const [backText, setBackText] = useState("");
  const [redirectToMain, setRedirect] = useState(false);
  const [hasFrontStave, setHasFrontStave] = useState(false);
  const [hasBackStave, setHasBackStave] = useState(false);
  const [frontStave, setFrontStave] = useState(null);
  const [backStave, setBackStave] = useState(null);

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

  const handleStaveChange = (setStave) => {
    return (staveProps) => {
      const { clef, keySignature, timeSignature, notes } = staveProps;
      const stave = (
        <Stave
          id={uuidv4()}
          clef={clef}
          keySignature={keySignature}
          timeSignature={timeSignature}
          notes={notes}
          fixedStaveWidth={false}
        />
      );
      setStave(stave);
    };
  };

  useEffect(() => {
    if (hasFrontStave) {
      setFront([frontText, frontStave]);
    } else {
      setFront(frontText);
    }
  }, [hasFrontStave, frontText, frontStave]);

  useEffect(() => {
    if (hasBackStave) {
      setBack([backText, backStave]);
    } else {
      setBack(backText);
    }
  }, [hasBackStave, backText, backStave]);

  const classes = useStyles();
  return (
    <div>
      {redirectToMain && <Redirect to="/" />}
      <div className={classes.buttonContainer}>
        <Link to="/">
          <Button variant="outlined" color="primary" disableElevation>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className={classes.iconMargin}
            />
            Back to Card Overview
          </Button>
        </Link>
      </div>
      <form className={classes.addFlashcardForm}>
        <TextField
          className={classes.formInputs}
          label="Front Text"
          fullWidth
          variant="outlined"
          value={frontText}
          onChange={(e) => handleInputChange(e, setFrontText)}
        />
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={hasFrontStave}
                onChange={() =>
                  handleSwitchChange(hasFrontStave, setHasFrontStave)
                }
                color="secondary"
                name="hasFrontStave"
              />
            }
            label="Add Music Stave to Front"
          />
        </FormGroup>
        {hasFrontStave && (
          <NewStave
            width={500}
            staveWidth={460}
            onStaveChange={handleStaveChange(setFrontStave)}
          />
        )}
        <TextField
          className={classes.formInputs}
          label="Back Text"
          fullWidth
          variant="outlined"
          value={backText}
          onChange={(e) => handleInputChange(e, setBackText)}
        />
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={hasBackStave}
                onChange={() =>
                  handleSwitchChange(hasBackStave, setHasBackStave)
                }
                color="secondary"
                name="hasBackStave"
              />
            }
            label="Add Music Stave to Back"
          />
        </FormGroup>
        {hasBackStave && (
          <NewStave
            width={500}
            staveWidth={460}
            onStaveChange={handleStaveChange(setBackStave)}
          />
        )}
        <div>
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            onClick={() => handleAddFlashcard()}
            className={classes.marginTop}
          >
            Add New Flashcard
          </Button>
        </div>
      </form>
    </div>
  );
}

export default NewCard;
