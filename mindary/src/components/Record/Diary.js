import React, { useState } from "react";
import styled from "styled-components";
import { Toggle } from "./Toggle";
import Memo from "./Memo";

const Diary = () => {
  const [isMemo, setIsMemo] = useState(false);

  const handleToggle = () => {
    setIsMemo(!isMemo);
  };

  return (
    <Container>
      <TitleBox>
        <Title>{isMemo ? "DIARY" : "MEMO"}</Title>
        <Toggle isOn={isMemo} toggleHandler={handleToggle} />
      </TitleBox>
      <BodyContainer>
        {isMemo ? (
          <Body>
            <Content>
              <SubTitle>카테고리</SubTitle>
              <Description>어떤 글을 작성하실 건가요?</Description>
              <SelectContainer>
                <SelectBox>일상</SelectBox>
                <SelectBox>영화</SelectBox>
                <SelectBox>독서</SelectBox>
                <SelectBox>음악</SelectBox>
                <SelectBox>에세이</SelectBox>
                <SelectBox>기타</SelectBox>
              </SelectContainer>
            </Content>
          </Body>
        ) : (
          <Memo />
        )}
      </BodyContainer>
    </Container>
  );
};
export default Diary;
const BodyContainer = styled.div`
  overflow: auto;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1.5px solid black;
  width: 387px;
  height: 471px;
  padding: 8px;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 163px;
  left: 725px;
  width: 406px;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SubTitle = styled.div`
  font-size: 16.13px;
  font-weight: 800;
`;

const Description = styled.span`
  font-size: 16px;
  margin: 5px 0;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 281.44px;
  height: 260.48px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 35px;
`;

const SelectBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  text-align: center;
  cursor: pointer;
  padding: 10px 20px;
  width: 81px;
  height: 42px;
`;
