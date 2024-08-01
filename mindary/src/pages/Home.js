import React, { useState } from "react";
import styled, {
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar1";
import DefaultExcel from "../components/Background/DefaultExcel";
import kakaobtn from "../assets/images/kakao_login.png";
import { useTheme } from "../styles/ThemeContext";
import SearchPw from "../components/Auth/SearchPw";

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const [showSearchPw, setShowSearchPw] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY; // REST API KEY
  const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI; // Redirect URI
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const handleSearchPwClick = () => {
    setShowSearchPw((prevShowSearchPw) => !prevShowSearchPw);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const handleKakaoLogin = () => {
    try {
      window.location.href = kakaoURL;
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Login failed", error);
    }
  };
  const handleLogin = () => {
    const accountExists = false;

    if (!accountExists) {
      setErrorMessage("※ 존재하지 않는 계정입니다.");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <StyledThemeProvider theme={theme}>
      <HeaderBase>
        <Header />
      </HeaderBase>
      <DefaultExcel />
      <Navbar toggleTheme={toggleTheme} />
      <Body>
        <LoginBody>
          <LoginSection>
            <Title>로그인</Title>
            <InputSection>
              <TitleSection>
                <SubTitle>항목</SubTitle>
                <Description>마인더리와 함께하는 마음 기록</Description>
              </TitleSection>
              <EmailSection>
                <Label htmlFor="email">이메일</Label>
                <EmailInput
                  id="email"
                  placeholder="이메일을 입력해주세요."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </EmailSection>
              <PwSection>
                <Label htmlFor="password">비밀번호</Label>
                <PwInput
                  id="password"
                  placeholder="비밀번호를 입력해주세요."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </PwSection>
              <SelectBar>
                <Signup>회원가입</Signup>
                <SearchPwbtn onClick={handleSearchPwClick}>
                  비밀번호 찾기
                </SearchPwbtn>
                <LoginBtn onClick={handleLogin}>로그인</LoginBtn>
              </SelectBar>
              <SimpleLoginWrapper>
                <SimpleLogin>간편 로그인</SimpleLogin>
                <KakaoBtn onClick={handleKakaoLogin} />
              </SimpleLoginWrapper>
            </InputSection>
            {showSearchPw && <SearchPw />}
          </LoginSection>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </LoginBody>
      </Body>
    </StyledThemeProvider>
  );
};

export default Home;

const Body = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  left: 510px;
  top: 261px;
  position: fixed;
`;

const HeaderBase = styled.div`
  display: flex;
  width: 100%;
  height: 52px;
  justify-content: center;
  position: fixed;
  top: 0;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 29px;
  width: 374px;
  border-bottom: 1px solid black;
  background-color: ${({ theme }) => theme.background};
`;

const SubTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-right: 1px solid black;
  width: 118px;
`;
const Description = styled.span`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  width: 254px;
`;

const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  width: 100%;
  max-width: 376px;
`;
const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  background-color: white;
`;
const EmailSection = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  height: 29px;
  flex-direction: row;
`;

const PwSection = styled(EmailSection)``;

const Title = styled.h1`
  display: flex;
  font-size: 16px;
  padding: 5px;
  font-weight: 900;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  font-size: 14px;
  width: 118.5px;
  font-weight: 700;
`;

const EmailInput = styled.input`
  display: flex;
  align-items: center;
  width: 248px;
  border: none;
  padding-left: 5px;
  font-size: 14px;
  &::placeholder {
    color: #cccccc;
    font-size: 16px;
    font-weight: 700;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset !important;
    box-shadow: 0 0 0 1000px white inset !important;
  }
`;

const PwInput = styled(EmailInput)``;

const LoginBtn = styled.button`
  height: 60px;
  width: 119px;
  color: black;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
  background-color: #efefef;
  font-weight: 700;
`;

const SelectBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid black;
  height: 60px;
`;

const SearchPwbtn = styled(LoginBtn)`
  border-bottom: none;
  border-right: 1px solid black;
  background-color: transparent;
  width: 137px;
`;
const Signup = styled(LoginBtn)`
  border-bottom: none;
  width: 120.5px;
  border-right: 1px solid black;
  background-color: transparent;
`;

const SimpleLoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

const SimpleLogin = styled(Label)`
  height: 29px;
  width: 100%;
  max-width: 118.5px;
`;

const KakaoBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 337px;
  width: 100%;
  height: 100%;
  background-color: #fee500;
  border: none;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    width: 50%;
    height: 100%;
    background-image: url(${kakaobtn});
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff0000;
  font-size: 16px;
  font-weight: 700;
  height: 29px;
  width: 183px;
  margin-top: 60px;
  padding-left: 10px;
  text-align: center;
`;

const LoginBody = styled.div`
  display: flex;
  flex-direction: row;
`;
