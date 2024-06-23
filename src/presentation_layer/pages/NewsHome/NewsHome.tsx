import PageNavButtons from "@/presentation_layer/components/molecules/PageNavButtons";
import { ModeToggle } from "@/presentation_layer/components/molecules/ModeToggle";
import Page from "@/presentation_layer/components/molecules/Page";
import { bgColors, logoSrc, texts } from "@/utils/Constants";
import React from "react";

const NewsHome: React.FC = () => {
  return (
    <Page
      backgroundColor={bgColors.bg_lime_600}
      brandName={texts.brand_name}
      pageTitle={texts.home_page_title}
      pageButtons={<PageNavButtons />}
      modeToggle={<ModeToggle />}
      burgerMenu={<div className="w-10 h-10 bg-blue-500">login</div>}
      logoSrc={logoSrc}
      footerCustomText={texts.copyright_text}
    >
      <div>NewsHome</div>
    </Page>
  );
};

export default NewsHome;
