import { NextPage } from "next";
import HeaderBar from "@/components/molecules/HeaderBar";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
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
  },
  content: {
    paddingTop: "80px"
  }
}));

type Props = {
  data: any;
};

const Index: NextPage<Props> = props => {
  const broadcasts = props.data.broadcasts;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeaderBar />
      <div className={classes.content}>
        <AnimeList data={broadcasts} totalCount={broadcasts.length} />
      </div>
    </div>
  );
};

Index.getInitialProps = async function () {
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
  const res = await fetch(`https://animonit.herokuapp.com/api/v1/anime/broadcast/get`);
  const data = await res.json();
  return { data };
};

export default Index;
