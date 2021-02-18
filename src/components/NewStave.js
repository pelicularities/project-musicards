import React, { useState, useEffect } from "react";
import Stave from "./Stave";
import { v4 as uuidv4 } from "uuid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Parser } from "vexflow/src/parser";
import easyScoreGrammar from "../grammars/easyscore";

const useStyles = makeStyles({
  formControl: {
    minWidth: 120,
    margin: "1rem",
  },
  formControlSmall: {
    minWidth: 80,
    margin: "1rem",
  },
  staveConfig: {
    display: "flex",
    justifyContent: "space-evenly",
  },
});

function NewStave({
  onStaveChange,
  staveWidth = 135,
  width = 150,
  height = 150,
}) {
  const classes = useStyles();
  const [clef, setClef] = useState("treble");
  const [key, setKey] = useState("C");
  const [timeSignature, setTimeSignature] = useState("4/4");
  const [notes, setNotes] = useState("");
  const [validNotes, setValidNotes] = useState(null);
  const [mode, setMode] = useState("major");
  const [keySignature, setKeySignature] = useState("C");

  const majorKeys = [
    "C",
    "F",
    "Bb",
    "Eb",
    "Ab",
    "Db",
    "Gb",
    "Cb",
    "G",
    "D",
    "A",
    "E",
    "B",
    "F#",
    "C#",
  ];
  const minorKeys = [
    "A",
    "D",
    "G",
    "C",
    "F",
    "Bb",
    "Eb",
    "Ab",
    "E",
    "B",
    "F#",
    "C#",
    "G#",
    "D#",
    "A#",
  ];

  const keyMap = (mode) => {
    const keysToMap = mode === "major" ? majorKeys : minorKeys;
    return keysToMap.map((key) => (
      <MenuItem key={key} value={key}>
        {key}
      </MenuItem>
    ));
  };

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

  useEffect(() => {
    if (mode === "major") {
      setKeySignature(key);
    } else {
      setKeySignature(`${key}m`);
    }
  }, [key, mode]);

  useEffect(() => {
    const regexp = /(?!\/(32|64))\/(3|5|6|7|9|0)/;
    if (!regexp.test(notes)) {
      const parser = new Parser(easyScoreGrammar);
      const result = parser.parse(notes);
      if (result.success) {
        setValidNotes(notes);
      }
    }
  }, [notes, clef]);

  useEffect(() => {
    if (!onStaveChange) return;
    const staveProps = {
      clef: clef,
      keySignature: keySignature,
      timeSignature: timeSignature,
      notes: validNotes,
    };
    onStaveChange(staveProps);
  }, [clef, keySignature, timeSignature, validNotes]);

  return (
    <div>
      <div className={classes.staveConfig}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Clef</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={clef}
            onChange={(event) => handleInputChange(event, setClef)}
          >
            <MenuItem value={"treble"}>Treble</MenuItem>
            <MenuItem value={"bass"}>Bass</MenuItem>
            <MenuItem value={"alto"}>Alto</MenuItem>
            <MenuItem value={"tenor"}>Tenor</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControlSmall}>
          <InputLabel id="demo-simple-select-label">Key</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={key}
            onChange={(event) => handleInputChange(event, setKey)}
          >
            {keyMap(mode)}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Mode</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={mode}
            onChange={(event) => handleInputChange(event, setMode)}
          >
            <MenuItem value={"major"}>Major</MenuItem>
            <MenuItem value={"minor"}>Minor</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControlSmall}>
          <InputLabel id="demo-simple-select-label">Time</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={timeSignature}
            onChange={(event) => handleInputChange(event, setTimeSignature)}
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
      <div>
        <TextField
          className={classes.formInputs}
          label="Notes"
          fullWidth
          variant="outlined"
          value={notes}
          onChange={(event) => handleInputChange(event, setNotes)}
        />
      </div>
      <Stave
        key={Math.random()}
        id={uuidv4()}
        clef={clef}
        keySignature={keySignature}
        timeSignature={timeSignature}
        notes={validNotes}
        staveWidth={staveWidth}
        width={width}
        height={height}
      />
    </div>
  );
}

export default NewStave;
