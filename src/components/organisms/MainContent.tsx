import React from "react";
import HeaderTab from "@/components/molecules/HeaderTab";
import TabContents from "@/components/organisms/TabContents";
import AnimeList from "@/components/organisms/AnimeList";
import AnimeListItem from "@/components/molecules/AnimeListItem";

const MainContent: React.FC<{}> = () => {
  // 選択しているタブの番号を管理
  const [value, setValue] = React.useState(0);

  function handleTapped(event: React.ChangeEvent<{}>, newValue: number): void {
    setValue(newValue);
  }

  function handleSwiped(index: number): void {
    setValue(index);
  }
  const weekend = ["月", "火", "水", "木", "金", "土", "日"];

  return (
    <>
      <HeaderTab label={weekend} value={value} onTapped={handleTapped} />
      <TabContents value={value} onSwiped={handleSwiped} count={weekend.length}>
        <AnimeList times={8}>
          <AnimeListItem />
        </AnimeList>
      </TabContents>
    </>
  );
};

export default MainContent;
