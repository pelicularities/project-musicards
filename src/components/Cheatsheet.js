import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { AccordionDetails } from "@material-ui/core/AccordionDetails";

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
            <strong>C4/4, D4</strong>: Middle C followed by the D above it, both
            quarter notes
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}

export default Cheatsheet;
