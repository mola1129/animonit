import { NextPage } from "next";
import HeaderBar from "@/components/molecules/HeaderBar";
import FooterNavigation from "@/components/organisms/FooterNavigation";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import HeaderTab from "@/components/molecules/HeaderTab";
import TabContents from "@/components/organisms/TabContents";
import AnimeList from "@/components/organisms/AnimeList";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "0 auto"
    // [theme.breakpoints.up("md")]: {
    //   width: "80%"
    // },
    // [theme.breakpoints.up("lg")]: {
    //   width: "60%"
    // }
  }
}));

const Index: NextPage = () => {
  const [value, setValue] = React.useState(0);

  function handleTapped(event: React.ChangeEvent<{}>, newValue: number): void {
    setValue(newValue);
  }

  function handleSwiped(index: number): void {
    setValue(index);
  }

  const weekend = ["月", "火", "水", "木", "金", "土", "日"];
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeaderBar />
      <HeaderTab label={weekend} value={value} onTapped={handleTapped} />
      <TabContents value={value} onSwiped={handleSwiped} count={weekend.length}>
        <AnimeList times={8} />
      </TabContents>
      <FooterNavigation />
    </div>
  );
};

export default Index;
