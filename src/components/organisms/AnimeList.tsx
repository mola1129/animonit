import React from "react";
import AnimeListItem from "@/components/molecules/AnimeListItem";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

type AnimeListProps = {
  data: any;
  totalCount: number;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    }
  })
);

const AnimeList: React.FC<AnimeListProps> = props => {
  const { data, totalCount } = props;
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {[...Array(totalCount)].map((number, index) => (
            <Grid key={data[index].id} item>
              <AnimeListItem
                name={data[index].work.title}
                image={data[index].work.images.facebook.og_image_url}
                episode={{
                  numberText: data[index].episode.number_text,
                  title: data[index].episode.title
                }}
                channelName={data[index].channel.name}
                startTime={data[index].started_at}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AnimeList;
