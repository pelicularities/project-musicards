import React, { useState, useEffect } from "react";
import Stave from "./Stave";
import { v4 as uuidv4 } from "uuid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  formControl: {
    minWidth: 120,
  },
});

function NewStave(props) {
  const classes = useStyles();
  const [keySignature, setKeySignature] = useState(null);
  const [timeSignature, setTimeSignature] = useState(null);
  const [notes, setNotes] = useState(null);
  const [clef, setClef] = useState(null);

  const handleDropdownChange = (event, setState) => {
    setState(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Clef</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={clef}
          onChange={(event) => handleDropdownChange(event, setClef)}
        >
          <MenuItem value={"treble"}>Treble</MenuItem>
          <MenuItem value={"bass"}>Bass</MenuItem>
          <MenuItem value={"alto"}>Alto</MenuItem>
          <MenuItem value={"tenor"}>Tenor</MenuItem>
        </Select>
      </FormControl>
      <Stave
        key={Math.random()}
        id={uuidv4()}
        clef={clef}
        keySignature={keySignature}
        timeSignature={timeSignature}
        notes={notes}
      />
    </div>
  );
}

export default NewStave;
