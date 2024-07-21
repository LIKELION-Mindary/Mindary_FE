import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Body>
        <Img src="path/to/your/image.jpg" alt="Background Image" />
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

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  padding: 20px;
  box-sizing: border-box;
`;

const Img = styled.img`
  width: 40%;
`;

const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: none;
  width: 345px;
`;

const Title = styled.h1`
  margin-bottom: 60px;
  font-size: 24px;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-size: 16px;
  align-self: flex-start;
`;

const EmailInput = styled.input`
  width: 95%;
  padding: 10px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid black;
  font-size: 16px;
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
  height: 62px;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 15px;
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

  & > * {
    margin: 0 10px;
  }
`;

const SearchId = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 14px;
`;

const SearchPw = styled(SearchId)``;
const Signup = styled(SearchId)``;

const SimpleLoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  font-size: 16px;
  color: #333;
`;

const SimpleLogin = styled.span`
  flex-shrink: 0;
`;

const Line1 = styled.div`
  flex-grow: 1;
  border-bottom: 1px solid black;
  margin-right: 15px;
`;

const Line2 = styled(Line1)`
  margin-left: 15px;
`;

const KakaoBtn = styled.button`
  width: 100%;
  height: 56px;
  background-color: #feea00;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;
