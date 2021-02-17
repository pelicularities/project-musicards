import React, { useState, useEffect } from "react";
import Stave from "./Stave";
import { v4 as uuidv4 } from "uuid";

function NewStave(props) {
  const [keySignature, setKeySignature] = useState(null);
  const [timeSignature, setTimeSignature] = useState(null);
  const [notes, setNotes] = useState(null);
  const [clef, setClef] = useState(null);

  return (
    <Stave
      id={uuidv4()}
      clef={clef}
      keySignature={keySignature}
      timeSignature={timeSignature}
      notes={notes}
    />
  );
}

export default NewStave;
