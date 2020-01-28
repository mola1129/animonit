import Box from "@material-ui/core/Box";

type TabContentProps = {
  children?: React.ReactNode;
  value: number;
  index: number;
};

const TabContent: React.FC<TabContentProps> = props => {
  const { children, value, index } = props;

  return (
    <div hidden={value != index ? true : false}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

export default TabContent;
