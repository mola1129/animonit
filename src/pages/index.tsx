import { NextPage } from "next";
import HeaderBar from "@/components/molecules/HeaderBar";
import AnimeListItem from "@/components/molecules/AnimeListItem";

const test: NextPage = () => {
  return (
    <>
      <HeaderBar />
      <AnimeListItem />
    </>
  );
};

export default test;
