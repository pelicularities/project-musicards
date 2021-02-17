import React, { useLayoutEffect, useRef } from "react";
import Vex from "vexflow";

function Stave({ id, notes, clef, timeSignature, keySignature }) {
  const divRef = useRef(null);
  useLayoutEffect(() => {
    divRef.current.innerHTML = "";
    const vf = new Vex.Flow.Factory({
      renderer: { elementId: id, width: 150, height: 150 },
    });

    const score = vf.EasyScore();
    const system = vf.System();

    let stave;
    if (notes) {
      stave = system.addStave({
        voices: [score.voice(score.notes(notes))],
      });
    } else {
      stave = system.addStave({
        voices: [score.voice(score.notes("B4/1/r"))],
      });
    }
    if (clef) stave.addClef(clef);
    if (keySignature) stave.addKeySignature(keySignature);
    if (timeSignature) stave.addTimeSignature(timeSignature);

    vf.draw();
  }, []);

  return <div ref={divRef} id={id}></div>;
}

export default Stave;
