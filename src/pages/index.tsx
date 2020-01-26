import { NextPage } from "next";
import HeaderBar from "@/components/molecules/HeaderBar";
import AnimeList from "@/components/organisms/AnimeList";
import AnimeListItem from "@/components/molecules/AnimeListItem";

const test: NextPage = () => {
  return (
    <>
      <HeaderBar />
      <AnimeList times={5}>
        <AnimeListItem />
      </AnimeList>
    </>
  );
};

export default test;
