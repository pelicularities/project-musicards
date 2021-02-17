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
  staveConfig: {
    display: "flex",
    justifyContent: "space-evenly",
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
      <div className={classes.staveConfig}>
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
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Key</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={keySignature}
            onChange={(event) => handleDropdownChange(event, setKeySignature)}
          >
            <MenuItem value={"C"}>C major</MenuItem>
            <MenuItem value={"F"}>F major</MenuItem>
            <MenuItem value={"Bb"}>Bb major</MenuItem>
            <MenuItem value={"Eb"}>Eb major</MenuItem>
            <MenuItem value={"Ab"}>Ab major</MenuItem>
            <MenuItem value={"Db"}>Db major</MenuItem>
            <MenuItem value={"Gb"}>Gb major</MenuItem>
            <MenuItem value={"Cb"}>Cb major</MenuItem>
            <MenuItem value={"G"}>G major</MenuItem>
            <MenuItem value={"D"}>D major</MenuItem>
            <MenuItem value={"A"}>A major</MenuItem>
            <MenuItem value={"E"}>E major</MenuItem>
            <MenuItem value={"B"}>B major</MenuItem>
            <MenuItem value={"F#"}>F# major</MenuItem>
            <MenuItem value={"C#"}>C# major</MenuItem>

            <MenuItem value={"Am"}>A minor</MenuItem>
            <MenuItem value={"Dm"}>D minor</MenuItem>
            <MenuItem value={"Gm"}>G minor</MenuItem>
            <MenuItem value={"Cm"}>C minor</MenuItem>
            <MenuItem value={"Fm"}>F minor</MenuItem>
            <MenuItem value={"Bbm"}>Bb minor</MenuItem>
            <MenuItem value={"Ebm"}>Eb minor</MenuItem>
            <MenuItem value={"Abm"}>Ab minor</MenuItem>
            <MenuItem value={"Em"}>E minor</MenuItem>
            <MenuItem value={"Bm"}>B minor</MenuItem>
            <MenuItem value={"F#m"}>F# minor</MenuItem>
            <MenuItem value={"C#m"}>C# minor</MenuItem>
            <MenuItem value={"G#m"}>G# minor</MenuItem>
            <MenuItem value={"D#m"}>D# minor</MenuItem>
            <MenuItem value={"A#m"}>A# minor</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Time</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={timeSignature}
            onChange={(event) => handleDropdownChange(event, setTimeSignature)}
          >
            <MenuItem value={null}>None</MenuItem>
            <MenuItem value={"4/4"}>4/4</MenuItem>
            <MenuItem value={"3/4"}>3/4</MenuItem>
            <MenuItem value={"2/4"}>2/4</MenuItem>
            <MenuItem value={"2/2"}>2/2</MenuItem>
            <MenuItem value={"6/8"}>6/8</MenuItem>
            <MenuItem value={"9/8"}>9/8</MenuItem>
            <MenuItem value={"12/8"}>12/8</MenuItem>
            <MenuItem value={"C"}>C</MenuItem>
            <MenuItem value={"C|"}>₵</MenuItem>
          </Select>
        </FormControl>
      </div>
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
