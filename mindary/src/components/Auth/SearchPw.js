import styled from "styled-components";
const SearchPw = () => {
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
          <EmailInput id="email" placeholder="이메일을 입력해주세요." />
        </EmailSection>
        <SendEmail> 임시 비밀번호 받기 </SendEmail>
      </SearchBox>
    </Wrapper>
  );
};

export default SearchPw;

const Wrapper = styled.div`
  display: flex;
  width: 315px;
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
  height: 30px;
  width: 313px;
  border-bottom: 1px solid black;
  background-color: #dddddd;
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
  width: 96px;
`;
const Description = styled.span`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  width: 216px;
`;
const EmailSection = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  height: 30px;
  flex-direction: row;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  font-size: 14px;
  width: 96px;
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
    font-weight: 700;
  }
`;

const SendEmail = styled.button`
  border: none;
  text-decoration: underline;
  background-color: transparent;
  height: 30px;
`;
