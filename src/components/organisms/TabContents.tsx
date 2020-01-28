import SwipeableViews from "react-swipeable-views";
import TabContent from "@/components/molecules/TabContent";

type TabContentsProps = {
  children: React.ReactNode;
  value: number;
  onSwiped: (index: number) => void;
  count: number;
};

const TabContents: React.FC<TabContentsProps> = props => {
  const { children, value } = props;
  const handleChangeIndex = props.onSwiped;
  const count = props.count;
  return (
    <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
      {/* count数分コンテンツを配置 */}
      {[...Array(count)].map((data, index) => {
        return (
          <TabContent key={index} value={value} index={index}>
            {children}
          </TabContent>
        );
      })}
    </SwipeableViews>
  );
};

export default TabContents;
