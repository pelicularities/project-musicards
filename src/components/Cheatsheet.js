import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cheatsheet: {
    marginBottom: "1rem",
  },
  cheatsheetList: {
    textAlign: "left",
  },
});

function Cheatsheet({ className }) {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={`${className} ${classes.cheatsheet}`}>
      <CardContent>
        <h3>Cheatsheet</h3>
        <ul className={classes.cheatsheetList}>
          <li>
            <strong>C4/4</strong>: Middle C, quarter note
          </li>
          <li>
            <strong>C4/4, Db4</strong>: Middle C followed by the D-flat above
            it, both quarter notes
          </li>
          <li>
            <strong>C5/1, Bn4/8</strong>: High C, whole note, followed by the
            B-natural below it, eighth note
          </li>
          <li>
            <strong>(D4 F#4 A4)/2, B4/4/r</strong>: D major chord, half note,
            followed by a quarter note rest
          </li>
          <li>
            <strong>D5/1/r</strong>: Full bar rest
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}

export default Cheatsheet;
