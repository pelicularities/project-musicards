// this file allows us to export the EasyScore grammar for parsing,
// without forcing us to display a stave on the screen

import Vex from "vexflow";

const hiddenDiv = document.createElement("div");
const vf = new Vex.Flow.Factory({
  renderer: { elementId: hiddenDiv, width: 0, height: 0 },
});

const easyScore = vf.EasyScore();
const easyScoreGrammar = easyScore.grammar;

export default easyScoreGrammar;
