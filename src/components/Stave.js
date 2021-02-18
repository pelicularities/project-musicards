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

    let defaultRest = "B4/1/r";
    if (timeSignature) {
      score.set({ time: timeSignature });
      switch (timeSignature) {
        case "2/4":
          // this case works
          defaultRest = "B4/2/r";
          break;
        case "3/4":
          // does not work - shows note instead of rest
          defaultRest = "B4/2./r";
          break;
        case "6/8":
          // does not work
          defaultRest = "B4/4./r, B4/4./r";
          break;
        case "9/8":
          // does not work
          defaultRest = "B4/4./r, B4/4./r, B4/4./r";
          break;
        case "12/8":
          // does not work
          defaultRest = "B4/4./r, B4/4./r, B4/4./r, B4/4./r";
          break;
        default:
          // this case works
          break;
      }
    }

    let beams;
    let stave;
    if (notes) {
      const voice = score.voice(score.notes(notes, { clef: clef || "treble" }));
      beams = Vex.Flow.Beam.applyAndGetBeams(voice);
      voice.setMode(2);
      stave = system.addStave({
        voices: [voice],
      });
    } else {
      stave = system.addStave({
        voices: [score.voice(score.notes(defaultRest))],
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
