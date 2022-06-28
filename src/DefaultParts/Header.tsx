import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = useCallback(() => {
    history.push("/");
  }, []);

  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleOpen}
          >
            <MenuIcon />
            {/* <Drawer anchor="left" open={open} onClose={toggleOpen}>
              <div>
                <ul>
                  <li>Dnd</li>
                  <li>Table1</li>
                  <li>Table2</li>
                </ul>
                hello
              </div>
            </Drawer> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Sample
          </Typography>
          <Button color="inherit" onClick={handleClick}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
