import React, { useEffect, useRef } from "react";
import Vex from "vexflow";

function Stave({ id, notes, clef, timeSignature, keySignature }) {
  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.innerHTML = "";
    const vf = new Vex.Flow.Factory({
      renderer: { elementId: id, width: 150, height: 150 },
    });

    const score = vf.EasyScore();
    const system = vf.System();

    // not sure why, but system.addTimeSignature in isolation
    // does not work. seems like the methods must be chained?
    if (timeSignature) {
      system
        .addStave({
          voices: [score.voice(score.notes(notes))],
        })
        .addClef(clef)
        .addKeySignature(keySignature)
        .addTimeSignature(timeSignature);
    } else {
      system
        .addStave({
          voices: [score.voice(score.notes(notes))],
        })
        .addClef(clef)
        .addKeySignature(keySignature);
    }
    vf.draw();
  }, []);

  return <div ref={divRef} id={id}></div>;
}

export default Stave;
