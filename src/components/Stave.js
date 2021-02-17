import React, { useLayoutEffect, useRef } from "react";
import Vex from "vexflow";
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
    const system = vf.System();

    let stave;
    if (notes) {
      const voice = score.voice(score.notes(notes, { clef: clef || "treble" }));
      voice.setMode(2);
      stave = system.addStave({
        voices: [voice],
      });
    } else {
      stave = system.addStave({
        voices: [score.voice(score.notes("B4/1/r"))],
      });
    }
    if (clef) stave.addClef(clef);
    if (keySignature) stave.addKeySignature(keySignature);
    if (timeSignature) {
      score.set({ timeSignature: timeSignature });
      stave.addTimeSignature(timeSignature);
    }

    vf.draw();
  }, []);

  if (hidden) {
    className = classes.hidden;
  }

  return <div ref={divRef} className={className} id={id}></div>;
}

export default Stave;
