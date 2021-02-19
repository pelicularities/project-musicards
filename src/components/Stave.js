import React, { useLayoutEffect, useRef } from "react";
import Vex from "vexflow";

function Stave({
  id,
  notes = "",
  clef,
  timeSignature,
  keySignature,
  staveWidth = 225,
  width = 250,
  height = 150,
  fixedStaveWidth = true,
}) {
  const divRef = useRef(null);
  let dynamicWidth = width;
  let dynamicStaveWidth = staveWidth;

  if (!fixedStaveWidth) {
    // determine staveWidth based on number of notes
    const notesCount = notes.split(",").length;
    if (notesCount < 3) {
      dynamicStaveWidth = 225;
      dynamicWidth = 250;
    } else {
      dynamicStaveWidth = 460;
      dynamicWidth = 500;
    }
  }

  useLayoutEffect(() => {
    divRef.current.innerHTML = "";

    const vf = new Vex.Flow.Factory({
      renderer: { elementId: id, width: dynamicWidth, height: height },
    });

    const score = vf.EasyScore();
    const system = vf.System({ width: dynamicStaveWidth });

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
        voices: [score.voice(score.notes("D5/1/r"))],
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

  return <div ref={divRef} id={id}></div>;
}

export default Stave;
