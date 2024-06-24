import { ModeToggle } from "@/presentation_layer/components/molecules/ModeToggle";
import Page from "@/presentation_layer/components/molecules/Page";
import PageNavButtons from "@/presentation_layer/components/molecules/PageNavButtons/PageNavButtons";
import { bgColors, logoSrc, texts } from "@/utils/Constants";
import React from "react";

const NewsHome: React.FC = () => {
  return (
    <Page
      backgroundColor={bgColors.bgLime600}
      brandName={texts.brandName}
      pageTitle={texts.homePageTitle}
      pageButtons={<PageNavButtons />}
      modeToggle={<ModeToggle />}
      burgerMenu={<div className="w-10 h-10 bg-blue-500">login</div>}
      logoSrc={logoSrc}
      footerCustomText={texts.copyrightText}
    >
      <NewsHome />
    </Page>
  );
};

export default NewsHome;
