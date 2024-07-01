import { logoSrc, routes, texts, themeBgColor } from "@/utils/Constants";
import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  ModeToggle,
  Page,
  PageNavButtons,
} from "@/presentation_layer/components";
import { NewsArchive, NewsDetail, NewsHome } from "..";
import { useRootPageViewModel } from "./RootPage.vm";

const RootPage: React.FC = () => {
  const { pageTitle, navigate } = useRootPageViewModel();

  return (
    <Page
      backgroundColor={themeBgColor}
      brandName={texts.brandName}
      pageTitle={pageTitle}
      pageButtons={<PageNavButtons />}
      modeToggle={<ModeToggle />}
      otherButtons={
        <div className="w-10 h-10 bg-blue-500 text-center">login</div>
      }
      logoSrc={logoSrc}
      headerNavHandler={() => navigate(routes.home)}
      footerCustomText={texts.copyrightText}
      footerCustomCssClasses="p-2 text-center fixed bottom-0 w-full"
    >
      <Routes>
        <Route path={routes.home} element={<NewsHome />} />
        <Route path={routes.newsDetail} element={<NewsDetail />} />
        <Route path={routes.newsArchive} element={<NewsArchive />} />
      </Routes>
    </Page>
  );
};

export default RootPage;
