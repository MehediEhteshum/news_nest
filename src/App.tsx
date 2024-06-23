import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsHome from "./presentation_layer/pages/NewsHome/NewsHome";
import NewsDetail from "./presentation_layer/pages/NewsDetail/NewsDetail";
import NewsArchive from "./presentation_layer/pages/NewsArchive/NewsArchive";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<NewsHome />} />
      <Route path="/news/:id" element={<NewsDetail />} />
      <Route path="/news-archive" element={<NewsArchive />} />
    </Routes>
  </BrowserRouter>
);

export default App;
