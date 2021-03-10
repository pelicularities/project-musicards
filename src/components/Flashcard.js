import React, { useState, useLayoutEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import { v4 as uuidv4 } from "uuid";

function Flashcard({ flashcard, className }) {
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

  // const prepareLayout = (side) => {
  //   // front and back may be a string or an array
  //   // if array, we want to process it for display first
  //   if (Array.isArray(side)) {
  //     return side.map((section) => {
  //       if (section.props) {
  //         // check length of notes, see if it's going to be a long stave
  //         // apply largeStave class if needed
  //         // this code STINKS
  //         const notesCount = section.props.notes.split(",").length;
  //         if (notesCount > 2) {
  //           return (
  //             <div className={classes.largeStave} key={Math.random()}>
  //               {section}
  //             </div>
  //           );
  //         }
  //       }
  //       return <div key={Math.random()}>{section}</div>;
  //     });
  //   } else {
  //     return side;
  //   }
  // };

  const prepareLayout = (side) => {
    // front and back will be an array of objects
    // each object has the keys "type" and "content"
    // we want the content to be rendered based on the type

    return side.map((section) => {
      if (section.type === "text") {
        return <div key={uuidv4()}>{section.content}</div>;
      }
    });
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
