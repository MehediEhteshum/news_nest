import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsHome from "./presentation_layer/pages/NewsHome/NewsHome";
import NewsDetail from "./presentation_layer/pages/NewsDetail/NewsDetail";
import NewsArchive from "./presentation_layer/pages/NewsArchive/NewsArchive";
import { ThemeProvider } from "./presentation_layer/components/atoms/ThemeProvider/ThemeProvider";
import { routes } from "./utils/Constants";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<NewsHome />} />
          <Route path={routes.newsDetail} element={<NewsDetail />} />
          <Route path={routes.newsArchive} element={<NewsArchive />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
