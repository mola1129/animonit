import { NextPage } from "next";
import HeaderBar from "@/components/molecules/HeaderBar";
import MainContent from "@/components/organisms/MainContent";
import FooterNavigation from "@/components/organisms/FooterNavigation";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     margin: "0 auto"
//     // [theme.breakpoints.up("md")]: {
//     //   width: "80%"
//     // },
//     // [theme.breakpoints.up("lg")]: {
//     //   width: "60%"
//     // }
//   }
// }));

const Index: NextPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HeaderBar />
      <MainContent />
      <FooterNavigation />
    </div>
  );
};

export default Index;
