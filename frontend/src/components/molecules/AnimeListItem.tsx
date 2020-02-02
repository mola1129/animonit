import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: "500px",
    height: "370px",
    borderRadius: "5%"
  }
});

type AnimeListItemProps = {
  name: string;
  image: string;
  episode: { numberText: number; title: string };
  channelName: string;
  startTime: string;
};

const AnimeListItem: React.FC<AnimeListItemProps> = props => {
  const { name, image, episode, channelName, startTime } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia
        component="img"
        alt="Anime"
        image={image === "" ? "/no-image.png" : image}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {`${episode.numberText} ${episode.title} ${channelName} ${startTime}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AnimeListItem;
