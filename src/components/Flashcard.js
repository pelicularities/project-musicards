import React, { useState, useLayoutEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function Flashcard({ flashcard, className }) {
  // determine width of Flashcard
  const isMoreThan540px = useMediaQuery("(min-width:540px)");
  const isMoreThan410px = useMediaQuery("(min-width:410px)");
  const isMoreThan360px = useMediaQuery("(min-width:360px)");
  const isMoreThan320px = useMediaQuery("(min-width:320px)");

  let maxWidth = "20rem";
  if (isMoreThan540px) maxWidth = "20rem";
  else if (isMoreThan410px) maxWidth = "15rem";
  else if (isMoreThan360px) maxWidth = "12rem";
  else if (isMoreThan320px) maxWidth = "9rem";
  else maxWidth = "7rem";

  const useStyles = makeStyles({
    flashcard: {
      borderRadius: "0.25rem",
      minHeight: "10rem",
      padding: "1rem",
      fontSize: "2rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      width: maxWidth,
      maxWidth: maxWidth,
    },
    backOfCard: {
      border: "1px solid #000000",
    },
    largeStave: {
      alignSelf: "flex-start",
    },
  });

  const classes = useStyles();
  const { front, back } = flashcard;
  const [isFront, setIsFront] = useState(true);

  useLayoutEffect(() => {
    setIsFront(true);
  }, [flashcard]);

  const flipCard = () => {
    setIsFront(!isFront);
  };

  const prepareLayout = (side) => {
    // front and back may be a string or an array
    // if array, we want to process it for display first
    if (Array.isArray(side)) {
      return side.map((section) => {
        if (section.props) {
          // check length of notes, see if it's going to be a long stave
          // apply largeStave class if needed
          // this code STINKS
          const notesCount = section.props.notes.split(",").length;
          if (notesCount > 2) {
            return (
              <div className={classes.largeStave} key={Math.random()}>
                {section}
              </div>
            );
          }
        }
        return <div key={Math.random()}>{section}</div>;
      });
    } else {
      return side;
    }
  };

  return (
    <Card
      className={clsx(className, classes.flashcard, {
        [classes.backOfCard]: !isFront,
      })}
      variant="outlined"
      onClick={flipCard}
    >
      {isFront ? prepareLayout(front) : prepareLayout(back)}
    </Card>
  );
}

export default Flashcard;
