import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

type HeaderTabProps = {
  // タブで選択するラベル
  label: Array<string>;
  value: number;
  onTapped: (event: React.ChangeEvent<{}>, newValue: number) => void;
};

const HeaderTab: React.FC<HeaderTabProps> = props => {
  const { label, value } = props;
  const handleChange = props.onTapped;

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs"
      >
        {/* key={index}はダメ */}
        {label.map((data, index) => {
          return <Tab key={index} label={data} />;
        })}
      </Tabs>
    </>
  );
};

export default HeaderTab;
