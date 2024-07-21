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
  padding: 30px;
  border: 2px solid black;
  width: 380px;
  height: 444px;
  border-radius: 4px;
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 45px;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

const SubTitle = styled.div`
  font-size: 22px;
  font-weight: 800;
`;

const Description = styled.span`
  font-size: 16px;
  margin: 5px 0;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 45px 0;
  gap: 35px;
`;

const SelectBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  text-align: center;
  cursor: pointer;
  padding: 40px 30px;
  width: 101px;
  height: 12px;
`;
