import { NextPage } from "next";
import HeaderBar from "@/components/molecules/HeaderBar";
import FooterNavigation from "@/components/organisms/FooterNavigation";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import HeaderTab from "@/components/molecules/HeaderTab";
import TabContents from "@/components/organisms/TabContents";
import AnimeList from "@/components/organisms/AnimeList";
import React from "react";
import fetch from "isomorphic-unfetch";

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

type Props = {
  data: any;
};

const Index: NextPage<Props> = props => {
  const programs = props.data.programs;

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
        <AnimeList data={programs} times={programs.length} />
      </TabContents>
      <FooterNavigation />
    </div>
  );
};

Index.getInitialProps = async function() {
  const date = new Date();
  const now =
    date.getUTCFullYear() +
    "/" +
    ("0" + (date.getUTCMonth() + 1)).slice(-2) +
    "/" +
    ("0" + date.getUTCDate()).slice(-2) +
    " " +
    ("0" + date.getUTCHours()).slice(-2) +
    ":" +
    ("0" + date.getUTCMinutes()).slice(-2) +
    ":" +
    ("0" + date.getUTCSeconds()).slice(-2);
  const token = "";
  const res = await fetch(
    `https://api.annict.com/v1/me/programs?sort_started_at=asc&filter_started_at_gt=${now}&access_token=${token}`
  );
  const data = await res.json();
  return { data };
};

export default Index;
