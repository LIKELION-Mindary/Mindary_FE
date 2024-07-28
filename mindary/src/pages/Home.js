import styled from "styled-components";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar1";
import FooterExcel from "../components/Background/FooterExcel";
import { useState } from "react";

const Home = ({ toggleTheme }) => {
  return (
    <>
      <HeaderBase>
        <Header />
      </HeaderBase>
      <FooterExcel />
      <Navbar toggleTheme={toggleTheme} />
      <Body>
        <LoginSection>
          <Title>로그인</Title>
          <Label htmlFor="email">이메일</Label>
          <EmailInput id="email" placeholder="이메일을 입력해주세요." />
          <Label htmlFor="password">비밀번호</Label>
          <PwInput id="password" placeholder="비밀번호를 입력해주세요." />
          <LoginBtn>로그인</LoginBtn>
          <SelectBar>
            <SearchId>아이디 찾기</SearchId>|<SearchPw>비밀번호 찾기</SearchPw>|
            <Signup>회원가입</Signup>
          </SelectBar>
          <SimpleLoginWrapper>
            <Line1 />
            <SimpleLogin>간편 로그인</SimpleLogin>
            <Line2 />
          </SimpleLoginWrapper>
          <KakaoBtn>카카오로 로그인</KakaoBtn>
        </LoginSection>
      </Body>
    </>
  );
};

export default Home;
const Homepage = styled.div`
  width: 100%;
  height: 100%;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  margin-top: 40px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
`;

const HeaderBase = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: center;
  position: fixed;
  top: 0;
`;

const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: none;
  width: 90%;
  max-width: 345px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 20px;
`;

const Label = styled.label`
  margin-bottom: 4px;
  font-size: 14px;
  align-self: flex-start;
`;

const EmailInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid black;
  font-size: 14px;
  &::placeholder {
    color: #ccc;
  }
`;

const PwInput = styled(EmailInput)``;

const LoginBtn = styled.button`
  background-color: black;
  color: white;
  border: none;
  width: 100%;
  height: 48px;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;

const SelectBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  margin-bottom: 10px;

  & > * {
    margin: 0 5px;
  }
`;

const SearchId = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const SearchPw = styled(SearchId)``;
const Signup = styled(SearchId)``;

const SimpleLoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  font-size: 14px;
  color: #333;
`;

const SimpleLogin = styled.span`
  flex-shrink: 0;
`;

const Line1 = styled.div`
  flex-grow: 1;
  border-bottom: 1px solid black;
  margin-right: 10px;
`;

const Line2 = styled(Line1)`
  margin-left: 10px;
`;

const KakaoBtn = styled.button`
  width: 100%;
  height: 48px;
  background-color: #feea00;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;
