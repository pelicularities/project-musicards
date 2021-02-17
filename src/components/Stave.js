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
  hidden = false,
}) {
  const divRef = useRef(null);
  const classes = useStyles();
  let className = "";
  useLayoutEffect(() => {
    divRef.current.innerHTML = "";
    const vf = new Vex.Flow.Factory({
      renderer: { elementId: id, width: 150, height: 150 },
    });

    const score = vf.EasyScore();
    const system = vf.System();

    let stave;
    if (notes) {
      try {
        const voice = score.voice(score.notes(notes));
        voice.setMode(2);
        stave = system.addStave({
          voices: [voice],
        });
      } catch (error) {
        console.log(error);
      }
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
