import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { axiosInstance } from "../../api/api";
import moment from "moment-timezone"; // Import timezone handling

const KakaoLogin = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  const handleLogin = async () => {
    try {
      if (!code) throw new Error("No code provided");

      console.log("Received code:", code);
      const response = await axiosInstance.post(
        "/mindary/accounts/kakao/login",
        {
          access_code: code,
        }
      );

      if (response.status === 200) {
        console.log("Login successful:", response.data);
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);

        const todayDate = moment().tz("Asia/Seoul").format("YYYY-MM-DD");
        navigate(`/mindary?date=${todayDate}&mode=chat`);
      } else {
        console.log("Unexpected login response status:", response.status);
      }
    } catch (error) {
      console.error("Login error:", error);
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
      if (!code) throw new Error("No code provided");

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
        localStorage.setItem(
          "access_token",
          registerResponse.data.access_token
        );
        localStorage.setItem(
          "refresh_token",
          registerResponse.data.refresh_token
        );

        const todayDate = moment().tz("Asia/Seoul").format("YYYY-MM-DD");
        navigate(`/mindary?date=${todayDate}&mode=chat`);
      } else {
        console.log(
          "Unexpected registration response status:",
          registerResponse.status
        );
      }
    } catch (registerError) {
      console.error("Registration error:", registerError);
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

export default KakaoLogin;
