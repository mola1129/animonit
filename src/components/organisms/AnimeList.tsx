import React from "react";
import { FixedSizeList } from "react-window";
import AnimeListItem from "@/components/molecules/AnimeListItem";
import AutoSizer from "react-virtualized-auto-sizer";

type AnimeListProps = {
  times: number;
};

const AnimeList: React.FC<AnimeListProps> = props => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          flex: "1 1 auto",
          // or
          height: 600
        }}
      >
        <AutoSizer>
          {({ height, width }): React.ReactElement => (
            <FixedSizeList
              height={height}
              itemCount={props.times}
              itemSize={85}
              width={width}
            >
              {AnimeListItem}
            </FixedSizeList>
          )}
        </AutoSizer>
      </div>
    </div>
  );
};

export default AnimeList;
