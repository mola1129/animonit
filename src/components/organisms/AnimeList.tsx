import React from "react";
import AnimeListItem from "@/components/molecules/AnimeListItem";

type AnimeListProps = {
  data: any;
  times: number;
};

const AnimeList: React.FC<AnimeListProps> = props => {
  const { data, times } = props;
  return <AnimeListItem />;
};

export default AnimeList;
