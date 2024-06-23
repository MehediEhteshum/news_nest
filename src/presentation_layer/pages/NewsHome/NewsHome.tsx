import Page from "@/presentation_layer/components/molecules/Page";
import { bgColors, logoSrc, texts } from "@/utils/Constants";
import React from "react";

const NewsHome: React.FC = () => {
  return (
    <Page
      backgroundColor={bgColors.bg_lime_600}
      brandName={texts.brand_name}
      pageTitle={texts.home_page_title}
      logoSrc={logoSrc}
      footerCustomText={texts.copyright_text}
      themeButton={<div className="w-10 h-10 bg-red-500">theme</div>}
      burgerMenu={<div className="w-10 h-10 bg-blue-500">burger</div>}
    >
      <div>NewsHome</div>
    </Page>
  );
};

export default NewsHome;
