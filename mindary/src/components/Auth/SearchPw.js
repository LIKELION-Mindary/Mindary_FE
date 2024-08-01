import styled from "styled-components";
import { useState } from "react";
const SearchPw = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    const accountExists = false;

    if (!accountExists) {
      setErrorMessage("※ 존재하지 않는 계정입니다.");
    } else {
      setErrorMessage("");
    }
  };
  return (
    <Wrapper>
      <Title>비밀번호 찾기</Title>
      <SearchBox>
        <TitleSection>
          <SubTitle>항목</SubTitle>
          <Description>마인더리와 함께하는 마음 기록</Description>
        </TitleSection>
        <EmailSection>
          <Label htmlFor="email">이메일</Label>
          <EmailInput id="email" placeholder="hongik@hongik.ac.kr" />
        </EmailSection>
        <SendEmail> 새 비밀번호 받기 </SendEmail>
      </SearchBox>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Wrapper>
  );
};

export default SearchPw;

const Wrapper = styled.div`
  display: flex;
  width: 376px;
  flex-direction: column;
  margin-top: 90px;
`;

const Title = styled.span`
  display: flex;
  font-size: 16px;
  font-weight: 900;
  padding: 5px;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 29px;
  width: 374px;
  border-bottom: 1px solid black;
  background-color: #dddddd;
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
const EmailSection = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  height: 29px;
  flex-direction: row;
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
  width: 209px;
  border: none;
  padding-left: 5px;
  font-size: 14px;
  &::placeholder {
    color: #cccccc;
    font-size: 16px;
    font-weight: 600;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset !important;
    box-shadow: 0 0 0 1000px white inset !important;
  }
`;

const SendEmail = styled.button`
  border: none;
  text-decoration: underline;
  background-color: white;
  height: 28px;
  font-weight: 700;
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
