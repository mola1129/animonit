import React from "react";
import List from "@material-ui/core/List";

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
