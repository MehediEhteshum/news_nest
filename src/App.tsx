import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsHome from "./presentation_layer/pages/NewsHome/NewsHome";
import NewsDetail from "./presentation_layer/pages/NewsDetail/NewsDetail";
import NewsArchive from "./presentation_layer/pages/NewsArchive/NewsArchive";
import { ThemeProvider } from "./presentation_layer/components/ThemeProvider/ThemeProvider";
import { routes } from "./utils/Constants";
import { Provider } from "react-redux";
import store from "./presentation_layer/store/Store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path={routes.home} element={<NewsHome />} />
            <Route path={routes.news_detail} element={<NewsDetail />} />
            <Route path={routes.news_archive} element={<NewsArchive />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
