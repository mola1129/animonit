import React from "react";
import List from "@material-ui/core/List";
import AnimeListItem from "@/components/molecules/AnimeListItem";

type Props = {
  times: number;
};

const AnimeList: React.FC<Props> = props => {
  const items = [];
  for (let i = 0; i < props.times; i++) {
    items.push(props.children);
  }
  return <List>{items}</List>;
};

export default AnimeList;
