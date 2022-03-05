import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    color: "infinity",
    backgroundColor: "#f5f5f5",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});

export const Footer = () => {
  const classes = useStyles();
  return <div className={classes.footer}>Footer</div>;
};
