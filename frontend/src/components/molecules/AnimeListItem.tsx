import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    borderRadius: "5%"
  },
  cardMedia: {
    paddingTop: "56.25%"
  }
});

type AnimeListItemProps = {
  name: string;
  startAt: { date: string; weekday: string; time: string };
  episode: { numberText: number; title: string };
  channelName: string;
  image: string;
};

const AnimeListItem: React.FC<AnimeListItemProps> = props => {
  const { name, startAt, episode, channelName, image } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia
        className={classes.cardMedia}
        image={image === "" ? "/no-image.png" : image}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h3">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {`${episode.numberText} ${episode.title || ""}`}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {`${channelName} ${startAt.date} (${startAt.weekday}) ${startAt.time}`}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default AnimeListItem;
