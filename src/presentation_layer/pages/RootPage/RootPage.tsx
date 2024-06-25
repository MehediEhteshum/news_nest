import { ModeToggle } from "@/presentation_layer/components/molecules/ModeToggle";
import Page from "@/presentation_layer/components/molecules/Page";
import PageNavButtons from "@/presentation_layer/components/molecules/PageNavButtons/PageNavButtons";
import { logoSrc, routes, texts, themeBgColor } from "@/utils/Constants";
import React from "react";
import NewsHome from "../NewsHome/NewsHome";
import { Route, Routes } from "react-router-dom";
import NewsDetail from "../NewsDetail/NewsDetail";
import NewsArchive from "../NewsArchive/NewsArchive";
import { useRootPageViewModel } from "./RootPage.vm";

const RootPage: React.FC = () => {
  const { pageTitle } = useRootPageViewModel();

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
