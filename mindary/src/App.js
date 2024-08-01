import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Record from "./pages/Record";
import KakaoLogin from "./components/Auth/KakaoLogin";

import { ThemeProvider } from "./styles/ThemeContext";
const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accounts/kakao" element={<KakaoLogin />} />
          <Route path="/record" element={<Record />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
