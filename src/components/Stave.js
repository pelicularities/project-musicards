import React, { useLayoutEffect, useRef } from "react";
import Vex from "vexflow";
import { Beam } from "vexflow/src/beam";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  hidden: {
    display: "none",
  },
});

function Stave({
  id,
  notes,
  clef,
  timeSignature,
  keySignature,
  staveWidth = 135,
  width = 150,
  height = 150,
  hidden = false,
}) {
  const divRef = useRef(null);
  const classes = useStyles();
  let className = "";

  useLayoutEffect(() => {
    divRef.current.innerHTML = "";
    const vf = new Vex.Flow.Factory({
      renderer: { elementId: id, width: width, height: height },
    });

    const score = vf.EasyScore();
    const system = vf.System({ width: staveWidth });

    let beams;
    let stave;
    if (notes) {
      score.set({ time: "1000/4" });
      const voice = score.voice(score.notes(notes, { clef: clef || "treble" }));
      beams = Vex.Flow.Beam.applyAndGetBeams(voice);
      voice.setMode(2);
      stave = system.addStave({
        voices: [voice],
      });
    } else {
      stave = system.addStave({
        voices: [score.voice(score.notes("B4/1/r"))],
      });
    }
    if (clef) {
      score.set({ clef: clef });
      stave.addClef(clef);
    }
    if (keySignature) stave.addKeySignature(keySignature);
    if (timeSignature) {
      stave.addTimeSignature(timeSignature);
    }

    vf.draw();
    if (beams) {
      beams.forEach((beam) => beam.setContext(vf.getContext()).draw());
    }
  }, []);

  if (hidden) {
    className = classes.hidden;
  }

  return <div ref={divRef} className={className} id={id}></div>;
}

export default Stave;
