import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { axiosInstance } from "../../api/api";
import DefaultExcel from "../Background/DefaultExcel";
import Navbar1 from "../Navbar/Navbar1";
import styled from "styled-components";
import Header from "../Header/Header";

const KakaoLogRedirect = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  const handleLogin = async () => {
    try {
      console.log("Received code:");
      const response = await axiosInstance.post(
        "/mindary/accounts/kakao/login",
        {
          access_code: code,
        }
      );
      if (response.status === 200) {
        console.log("Login successful:", response.data);
        localStorage.setItem("accessToken", response.data.access_token);
        localStorage.setItem("refreshToken", response.data.refresh_token);
        navigate("/record");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          handleRegistration();
        } else if (error.response.status === 401) {
          alert("인증이 실패되었습니다.");
        } else if (error.response.status === 400) {
          alert("이미 등록된 사용자입니다.");
        } else {
          alert(`An error occurred: ${error.response.status}`);
        }
      } else {
        alert("Login failed: No response from server");
      }
    }
  };
  const handleRegistration = async () => {
    try {
      console.log("Attempting registration with code:", code);
      const registerResponse = await axiosInstance.post(
        "/mindary/accounts/kakao/register",
        {
          access_code: code,
          nickname: "홍길동",
        }
      );
      if (registerResponse.status === 200) {
        console.log("Registration successful:", registerResponse.data);
        localStorage.setItem("accessToken", registerResponse.data.access_token);
        localStorage.setItem(
          "refreshToken",
          registerResponse.data.refresh_token
        );
        navigate("/record");
      }
    } catch (registerError) {
      console.error("Registration failed:", registerError);
      if (registerError.response) {
        if (registerError.response.status === 400) {
          console.log("이미 등록된 사용자입니다.");
        } else {
          console.error(
            "Unexpected error during registration:",
            registerError.response
          );
        }
      } else {
        console.error("Unexpected error during registration:", registerError);
      }
    }
  };

  useEffect(() => {
    if (code) {
      handleLogin();
    } else {
      console.error("No code found in URL");
      navigate("/");
    }
  }, [code, navigate]);

  return <div>Loading...</div>;
};

export default KakaoLogRedirect;
