import Page from "@/presentation_layer/components/molecules/Page";
import { bgColors, logoSrc, texts } from "@/utils/Constants";
import React from "react";

const NewsHome: React.FC = () => {
  return (
    <Page
      backgroundColor={bgColors.bg_lime_600}
      headerTitle={texts.brand_name}
      logoSrc={logoSrc}
      footerCustomText={texts.copyright_text}
    >
      <div>NewsHome</div>
    </Page>
  );
};

export default NewsHome;
