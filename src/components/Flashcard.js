import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  flashcard: {
    width: "14rem",
    height: "18rem",
    borderRadius: "0.25rem",
    fontSize: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
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
    <Card className={classes.flashcard} variant="outlined" onClick={flipCard}>
      {isFront ? front : back}
    </Card>
  );
}

export default Flashcard;
