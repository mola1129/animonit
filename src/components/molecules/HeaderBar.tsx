import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  headerButton: {
    margin: "0 auto"
  }
}));

const HeaderBar = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.headerButton}
            color="inherit"
            aria-label="menu"
          >
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderBar;
