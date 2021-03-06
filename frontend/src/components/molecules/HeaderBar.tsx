import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles(() => ({
  headerBar: {
    position: "fixed",
    top: "0",
    width: "100%"
  },
  headerButton: {
    margin: "0 auto"
  }
}));

const HeaderBar: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.headerBar}>
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
