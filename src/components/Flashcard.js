import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  flashcard: {
    borderRadius: "0.25rem",
    height: "10rem",
    padding: "1rem",
    fontSize: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  backOfCard: {
    border: "1px solid #000000",
  },
});

function Flashcard({ flashcard }) {
  const classes = useStyles();
  const { front, back } = flashcard;
  const [isFront, setIsFront] = useState(true);

  const flipCard = () => {
    setIsFront(!isFront);
  };

  return (
    <Card
      className={clsx(classes.flashcard, { [classes.backOfCard]: !isFront })}
      variant="outlined"
      onClick={flipCard}
    >
      {isFront ? front : back}
    </Card>
  );
}

export default Flashcard;
