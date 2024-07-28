import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Record from "./pages/Record";
import Auth from "./components/Auth/Auth";
import { ThemeProvider } from "styled-components";
import { green, black } from "./styles/theme";

const App = () => {
  const [theme, setTheme] = useState("black");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "black" ? "green" : "black"));
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === "black" ? black : green}>
        <Routes>
          <Route path="/" element={<Home toggleTheme={toggleTheme} />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/record"
            element={<Record toggleTheme={toggleTheme} />}
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
