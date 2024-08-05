import React from "react";
import styled, {
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { useTheme } from "../styles/ThemeContext";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/NoLogoutNavbar";
import DefaultExcel from "../components/Background/DefaultExcel";
import GreenImage from "../assets/images/GreenLanding.svg";
import BlackImage from "../assets/images/BlackLanding.svg";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const { theme, toggleTheme } = useTheme(); // Use useTheme hook to get theme and toggleTheme
  const navigate = useNavigate(); // Initialize useNavigate hook
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleImageClick = () => {
    const formattedDate = new Date().toISOString().split("T")[0];
    if (isLoggedIn) {
      navigate(`/mindary?date=${formattedDate}&mode=chat`);
    } else {
      navigate("/login");
    }
  };

  return (
    <StyledThemeProvider theme={theme}>
      {/* Pass the correct theme object here */}
      <HeaderBase>
        <Header />
      </HeaderBase>
      <ImageContainer onClick={handleImageClick}>
        {theme.modeIcon === "🟢" ? (
          <Image src={GreenImage} alt="Green Theme" />
        ) : (
          <Image src={BlackImage} alt="Black Theme" />
        )}
      </ImageContainer>
      <DefaultExcel />
      <Navbar toggleTheme={toggleTheme} />
    </StyledThemeProvider>
  );
};

export default Landing;

const HeaderBase = styled.div`
  display: flex;
  width: 100%;
  height: 52px;
  justify-content: center;
  position: fixed;
  top: 0;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust this to your needs */
  cursor: pointer; /* Change cursor to pointer to indicate clickability */
`;

const Image = styled.img`
  max-width: 100%;
  z-index: 1000;
  max-height: 100%;
  object-fit: cover; /* Ensures the image covers the container without distortion */
`;
