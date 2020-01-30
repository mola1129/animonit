import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

type AnimeListItemProps = {
  title: string;
  image: string;
  episode: number;
  channel: string;
};

const AnimeListItem: React.FC<AnimeListItemProps> = props => {
  const { title, image, episode, channel } = props;
  return (
    <Card>
      <CardMedia component="img" alt="Anime" image={image}></CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {`${episode}`}
        </Typography>
      </CardContent>
    </Card>

    // <div key={data.data[index].id} style={style}>
    //   <ListItem>
    //     <ListItemAvatar>
    //       <Avatar
    //         variant="square"
    //         src={data.data[index].work.images.recommended_url}
    //       />
    //     </ListItemAvatar>
    //     <ListItemText
    //       primary={data.data[index].work.title}
    //       secondary={
    //         <>{`第${data.data[index].episode.number}話 ${data.data[index]
    //           .episode.title || ""} ${data.data[index].channel.name}`}</>
    //       }
    //     />
    //   </ListItem>
    //   <Divider />
    // </div>
  );
};

export default AnimeListItem;
