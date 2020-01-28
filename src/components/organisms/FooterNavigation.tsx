import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";

const FooterNavigation: React.FC<{}> = () => {
  const [value, setValue] = React.useState("home");

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: string
  ): void => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange}>
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
