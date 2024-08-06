import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../api/api";
import moment from "moment-timezone"; // Import timezone handling
import { TailSpin } from "react-loader-spinner";

const KakaoLogin = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  const [isLoading, setIsLoading] = useState(true);

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
        alert(`An error occurred: ${error.response.status}`);
      }
    } finally {
      setIsLoading(false); // 로딩 상태 종료
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
  return (
    <div>
      {isLoading && (
        <div className="spinner-container">
          <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
    </div>
  );
};

export default KakaoLogin;
