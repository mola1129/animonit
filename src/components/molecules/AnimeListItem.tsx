import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles(() => ({
  listItem: {
    flexGrow: 1
  },
  headerButton: {
    margin: "0 auto"
  }
}));

type Props = {
  data?: string;
};

const AnimeListItem: React.FC<Props> = () => {
  const classes = useStyles(useStyles);
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="anime image" />
        </ListItemAvatar>
        <ListItemText
          primary="タイトル"
          secondary={<>{"放送局: 放送時間"}</>}
        />
        <Switch color="primary" />
      </ListItem>
      <Divider />
    </>
  );
};

export default AnimeListItem;