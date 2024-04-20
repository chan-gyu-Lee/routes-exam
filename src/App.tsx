import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/global_style";

import PageLayout from "./layout/PageLayout";
import { Global } from "@emotion/react";
function App() {
  return (
    <BrowserRouter>
      <Global styles={GlobalStyle} />
      <Routes>
        <Route path="*" element={<PageLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
