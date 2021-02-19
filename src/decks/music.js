import { v4 as uuidv4 } from "uuid";
import Stave from "../components/Stave";

const musicDeck = [
  {
    id: uuidv4(),
    front: [
      "What is this chord?",
      <Stave
        id={uuidv4()}
        clef="treble"
        keySignature="C"
        fixedStaveWidth={false}
        notes="(C4 E4 G4)/1"
      />,
    ],
    back: "C major",
  },
  {
    id: uuidv4(),
    front: [
      "What is this chord?",
      <Stave
        id={uuidv4()}
        clef="treble"
        keySignature="G"
        fixedStaveWidth={false}
        notes="(G4 B4 D5)/1"
      />,
    ],
    back: "G major",
  },
  {
    id: uuidv4(),
    front: [
      "What is this chord?",
      <Stave
        id={uuidv4()}
        clef="treble"
        keySignature="D"
        fixedStaveWidth={false}
        notes="(D4 F4 A4)/1"
      />,
    ],
    back: "D major",
  },
  {
    id: uuidv4(),
    front: [
      "What is this chord?",
      <Stave
        id={uuidv4()}
        clef="treble"
        keySignature="A"
        fixedStaveWidth={false}
        notes="(A4 C5 E5)/1"
      />,
    ],
    back: "A major",
  },
  {
    id: uuidv4(),
    front: [
      "What is this chord?",
      <Stave
        id={uuidv4()}
        clef="treble"
        keySignature="E"
        fixedStaveWidth={false}
        notes="(E4 G4 B4)/1"
      />,
    ],
    back: "E major",
  },
  {
    id: uuidv4(),
    front: [
      "What is this chord?",
      <Stave
        id={uuidv4()}
        clef="treble"
        keySignature="B"
        fixedStaveWidth={false}
        notes="(B4 D5 F5)/1"
      />,
    ],
    back: "B major",
  },
  {
    id: uuidv4(),
    front: [
      "What is this chord?",
      <Stave
        id={uuidv4()}
        clef="treble"
        keySignature="F#m"
        fixedStaveWidth={false}
        notes="(F4 A4 C5)/1"
      />,
    ],
    back: "F# minor",
  },
  {
    id: uuidv4(),
    front: [
      "What is this chord?",
      <Stave
        id={uuidv4()}
        clef="treble"
        keySignature="Db"
        fixedStaveWidth={false}
        notes="(D4 F4 A4)/1"
      />,
    ],
    back: "D-flat major",
  },
  {
    id: uuidv4(),
    front: [
      "What is this chord?",
      <Stave
        id={uuidv4()}
        clef="treble"
        keySignature="Ab"
        fixedStaveWidth={false}
        notes="(A4 C5 E5)/1"
      />,
    ],
    back: "A-flat major",
  },
  {
    id: uuidv4(),
    front: [
      "What is this chord?",
      <Stave
        id={uuidv4()}
        clef="treble"
        keySignature="Ebm"
        fixedStaveWidth={false}
        notes="(E4 G4 B4)/1"
      />,
    ],
    back: "E-flat minor",
  },
  {
    id: uuidv4(),
    front: [
      "What is this chord?",
      <Stave
        id={uuidv4()}
        clef="treble"
        keySignature="Bbm"
        fixedStaveWidth={false}
        notes="(B4 D5 F5)/1"
      />,
    ],
    back: "B-flat minor",
  },
  {
    id: uuidv4(),
    front: [
      "What is this chord?",
      <Stave
        id={uuidv4()}
        clef="treble"
        keySignature="Fm"
        fixedStaveWidth={false}
        notes="(F4 A4 C5)/1"
      />,
    ],
    back: "F minor",
  },
];

export default musicDeck;
