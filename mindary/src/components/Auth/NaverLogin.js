import React from "react";

const NaverLogin = () => {
  const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID; // CLIENT_ID. 시간되면 env 파일로 분리하자.
  const REDIRECT_URI = "http://localhost:3000/oauth"; // REDIRECT_URI
  const STATE = "false"; // flase였다. 원래. 오타였나?
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;

  const NaverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  return <button onClick={NaverLogin}>네이버 로그인</button>;
};

export default NaverLogin;
