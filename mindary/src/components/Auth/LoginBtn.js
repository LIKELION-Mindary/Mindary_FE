import React, { useState } from "react";
import LogoutBtn from "./LogoutBtn"; // 로그아웃 컴포넌트 import

function LoginBtn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage("이메일과 비밀번호를 입력하세요.");
      return;
    }

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/mindary/accounts/original/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.status === 200) {
      // if (response.ok) {
        const data = await response.json();
        alert("로그인 성공:", data);

        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);

        setErrorMessage("");
        setIsLoggedIn(true); // 로그인 상태를 true로 변경
      } else if (response.status === 400) {
        setErrorMessage("이메일 및 비밀번호가 입력되지 않았습니다.");
      } else if (response.status === 401) {
        setErrorMessage("※ 존재하지 않는 계정입니다.");
      } else {
        setErrorMessage("로그인 실패. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("로그인 중 오류 발생:", error);
      setErrorMessage("로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <h2>로그인</h2>
          <div>
            <label htmlFor="email">이메일: </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">비밀번호: </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>로그인</button>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
      ) : (
        <LogoutBtn /> // 로그인 상태일 때 로그아웃 버튼 표시
      )}
    </div>
  );
}

export default LoginBtn;
