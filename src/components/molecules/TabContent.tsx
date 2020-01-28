import Box from "@material-ui/core/Box";

type TabContentProps = {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
};

const TabContent: React.FC<TabContentProps> = props => {
  const { children, value, index, ...other } = props;

  return (
    <div
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

export default TabContent;
