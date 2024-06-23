import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsHome from "./presentation_layer/pages/NewsHome/NewsHome";
import NewsDetail from "./presentation_layer/pages/NewsDetail/NewsDetail";
import NewsArchive from "./presentation_layer/pages/NewsArchive/NewsArchive";
import { ThemeProvider } from "./presentation_layer/components/ThemeProvider/ThemeProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewsHome />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/news-archive" element={<NewsArchive />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
