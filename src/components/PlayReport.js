import { CardActions } from "@material-ui/core";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  reportSpacing: {
    marginTop: "1rem",
    paddingBottom: "1rem",
  },
  largeType: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
});

function PlayReport({ cards, attempts }) {
  const classes = useStyles();
  const calculatePercentage = () => {
    return ((cards * 100) / attempts).toFixed(1);
  };

  return (
    <Card variant="outlined" className={classes.reportSpacing}>
      <CardContent>
        <h2>Deck Complete!</h2>
        <h3>Total cards</h3>
        <div className={classes.largeType}>{cards}</div>
        <h3>Total attempts</h3>
        <div className={classes.largeType}>{attempts}</div>
        <h3>% correct</h3>
        <div className={classes.largeType}>{calculatePercentage()}%</div>
      </CardContent>
    </Card>
  );
}

export default PlayReport;
