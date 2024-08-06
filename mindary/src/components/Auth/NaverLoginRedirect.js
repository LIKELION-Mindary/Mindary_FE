import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Spinner from "../../assets/Spinner1.gif";
import moment from "moment-timezone";
import axios from "axios";

const NaverLoginRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Extract the authorization code from the URL
    const code = new URL(window.location.href).searchParams.get("code");
    console.log("Authorization Code:", code);

    if (code) {
      // Send the code to your backend to exchange it for access and refresh tokens
      axios
        .post("/api/auth/naver", { code }) // Adjust the endpoint according to your backend setup
        .then((response) => {
          const { success, accessToken, refreshToken, user, isRegistered } = response.data; // Assume response includes 'refreshToken'

          if (success) {
            // Store access and refresh tokens securely
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken); // Store refresh token

            // Check if the user is new or existing
            if (isRegistered) {
              // Handle existing user login
              const todayDate = moment().tz("Asia/Seoul").format("YYYY-MM-DD");
              navigate(`/mindary?date=${todayDate}&mode=chat`);
            } else {
              // Handle new user registration
              navigate("/register"); // Navigate to registration page
            }
          } else {
            // Handle login failure
            alert("Login failed, please try again.");
            navigate("/login"); // Ensure this matches your backend's redirection logic
          }
        })
        .catch((error) => {
          console.error("Login error:", error);
          alert("An error occurred, please try again.");
          navigate("/login"); // Ensure this matches your backend's redirection logic
        });
    } else {
      // If no code is found, redirect to the login page
      alert("Authorization code not found, please try logging in again.");
      navigate("/login"); // Ensure this matches your backend's redirection logic
    }
  }, [navigate]);

  return (
    <Wrap>
      <img src={Spinner} alt="Loading" width="10%" />
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: 200px;
  min-height: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default NaverLoginRedirect;
