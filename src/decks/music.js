import { v4 as uuidv4 } from "uuid";
import Stave from "../components/Stave";

const musicDeck = [
  {
    id: uuidv4(),
    front: [
      "What is this chord?",
      <Stave clef="treble" keySignature="C" notes="(C4 E4 G4)/1" />,
    ],
    back: "C major",
  },
  {
    id: uuidv4(),
    front: ["What is this chord?"],
    back: "G major",
  },
  {
    id: uuidv4(),
    front: ["What is this chord?"],
    back: "D7",
  },
  {
    id: uuidv4(),
    front: ["What is this chord?"],
    back: "Asus4",
  },
  {
    id: uuidv4(),
    front: ["What is this chord?"],
    back: "E minor 6",
  },
  {
    id: uuidv4(),
    front: ["What is this chord?"],
    back: "B major 7",
  },
  {
    id: uuidv4(),
    front: ["What is this chord?"],
    back: "F#11",
  },
  {
    id: uuidv4(),
    front: ["What is this chord?"],
    back: "D-flat 7 half-diminished",
  },
  {
    id: uuidv4(),
    front: ["What is this chord?"],
    back: "A-flat major",
  },
  {
    id: uuidv4(),
    front: ["What is this chord?"],
    back: "E-flat minor 13",
  },
  {
    id: uuidv4(),
    front: ["What is this chord?"],
    back: "B-flat 11 #5",
  },
  {
    id: uuidv4(),
    front: ["What is this chord?"],
    back: "F6",
  },
];

export default musicDeck;
