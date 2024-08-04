import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Record from "./pages/Record";
import KakaoLogin from "./components/Auth/KakaoLogin";
import Archieve from "./pages/Archieve";
import { ThemeProvider } from "./styles/ThemeContext";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Home />} />
          <Route path="/accounts/kakao" element={<KakaoLogin />} />
          <Route path="/mindary" element={<Record />} />
          <Route path="/mindary/records/archieve" element={<Archieve />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
