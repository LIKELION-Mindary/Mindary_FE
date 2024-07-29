import React, { useState } from "react";
import styled, {
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar1";
import FooterExcel from "../components/Background/FooterExcel";
import kakaobtn from "../assets/images/kakao_login.png";
import { useTheme } from "../styles/ThemeContext";
import SearchPw from "../components/Auth/SearchPw";

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const [showSearchPw, setShowSearchPw] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearchPwClick = () => {
    setShowSearchPw((prevShowSearchPw) => !prevShowSearchPw);
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
      <FooterExcel />
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
                <KakaoBtn />
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
  top: 52px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  height: 30px;
  width: 315px;
  border-bottom: 1px solid black;
  background-color: ${({ theme }) => theme.background};
`;

const SubTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-right: 1px solid black;
  width: 94px;
`;
const Description = styled.span`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  width: 216px;
`;

const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  width: 100%;
  max-width: 317px;
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
  height: 30px;
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
  width: 98px;
  font-weight: 700;
`;

const EmailInput = styled.input`
  display: flex;
  align-items: center;
  width: 216px;
  border: none;
  padding-left: 5px;
  font-size: 14px;
  &::placeholder {
    color: #cccccc;
    font-size: 16px;
    font-weight: 700;
  }
`;

const PwInput = styled(EmailInput)``;

const LoginBtn = styled.button`
  height: 60px;
  width: 106px;
  color: black;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
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
  text-decoration: transparent;
`;
const Signup = styled(LoginBtn)`
  border-bottom: none;
  width: 97px;
  border-right: 1px solid black;
  text-decoration: transparent;
`;

const SimpleLoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

const SimpleLogin = styled(Label)`
  height: 31px;
  width: 100%;
  max-width: 96px;
`;

const KakaoBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fee500;
  border: none;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    width: 60%;
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
  height: 30px;
  width: 183px;
  margin-top: 60px;
  padding-left: 60px;
  text-align: center;
`;

const LoginBody = styled.div`
  display: flex;
  flex-direction: row;
`;
