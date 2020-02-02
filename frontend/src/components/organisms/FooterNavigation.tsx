import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    position: "fixed",
    bottom: 0,
    width: "100%"
  }
}));

const FooterNavigation: React.FC<{}> = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("home");

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: string
  ): void => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      className={classes.root}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
      <BottomNavigationAction
        label="Account"
        value="account"
        icon={<AccountCircleIcon />}
      />
    </BottomNavigation>
  );
};

export default FooterNavigation;
