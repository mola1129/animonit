import { NextPage } from "next";
import HeaderBar from "@/components/molecules/HeaderBar";
import MainContent from "@/components/organisms/MainContent";
import FooterNavigation from "@/components/organisms/FooterNavigation";

const Index: NextPage = () => {
  return (
    <>
      <HeaderBar />
      <MainContent />
      <FooterNavigation />
    </>
  );
};

export default Index;
