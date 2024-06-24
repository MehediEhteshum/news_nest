import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./presentation_layer/components/atoms/ThemeProvider/ThemeProvider";
import RootPage from "./presentation_layer/pages/RootPage/RootPage";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <RootPage />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
