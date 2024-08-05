import React from "react";

function LogoutBtn() {
  // 로그아웃 함수
  const handleLogout = async () => {
    try {
      // 백엔드로 로그아웃 요청 보내기
      const response = await fetch(
        "http://43.201.89.165/mindary/accounts/original/logout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 보통 로그아웃 시 Authorization 헤더로 토큰을 보내서 서버에서 검증함
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
          body: JSON.stringify({
            refresh_token: localStorage.getItem("refresh_token"),
          }),
          // body: JSON.stringify( localStorage.getItem("refresh_token") ), 이런 식으로 하면 안 되게 백엔드가 코드를
          // 짜나보다.
          // Also, JSON.stringify도 꼭 해줘야 한다.
        }
      );

      if (response.ok) {
        // 로그아웃 성공 처리
        alert("로그아웃 성공");

        // 로컬 스토리지에서 토큰 제거
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");

        // 로그아웃 후 추가적인 처리 로직
        // 예를 들어, 로그인 페이지로 리다이렉트
        // window.location.href = '/login';
      } else {
        // 로그아웃 실패 시 처리
        alert("로그아웃 실패. 다시 시도해주세요.");
      }
    } catch (error) {
      // 네트워크 에러 처리
      console.error("로그아웃 중 오류 발생:", error);
      alert("로그아웃 중 오류가 발생했습니다.");
    }
  };

  return <button onClick={handleLogout}>로그아웃</button>;
}

export default LogoutBtn;
