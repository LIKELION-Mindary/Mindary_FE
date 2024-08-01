import React, { useState } from "react";
import styled from "styled-components";
import { Toggle } from "./Toggle";
import Memo from "./Memo";
import moment from "moment";
import WritePage from "./WritePage";

const Diary = ({ selectedDate }) => {
  const [isMemo, setIsMemo] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const handleToggle = () => {
    setIsMemo(!isMemo);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setCurrentStep(0); // Ensure to start at the first step
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handlePreviousStep = () => {
    setSelectedCategory(null);
    setCurrentStep(0);
  };

  const handleNextStep = () => {
    if (selectedCategory) {
      // Go to the next step which is the writing page for the selected category
      setCurrentStep(1);
    }
  };

  return (
    <Container>
      <TitleBox>
        <Title>{moment(selectedDate).format("M월 D일 일지")}</Title>
        <Toggle isOn={isMemo} toggleHandler={handleToggle} />
      </TitleBox>
      <BodyContainer>
        {isMemo ? (
          <Body>
            <SubTitle>
              <SubTitle1>분야</SubTitle1>
              <SubTitle2>제목</SubTitle2>
              <SubTitle3>미리보기</SubTitle3>
            </SubTitle>
            <Content isEditing={isEditing} currentStep={currentStep}>
              {isEditing ? (
                currentStep === 0 ? (
                  <WriteSection isEditing={isEditing} currentStep={currentStep}>
                    {["일상", "영화", "음악", "독서", "에세이", "기타"].map(
                      (category) => (
                        <WriteItem
                          key={category}
                          onClick={() => handleCategorySelect(category)}
                          isSelected={selectedCategory === category}
                        >
                          <WriteCategory>{category}</WriteCategory>
                          <WriteTitle>&nbsp;</WriteTitle>
                          <WriteContent>&nbsp;</WriteContent>
                        </WriteItem>
                      )
                    )}
                  </WriteSection>
                ) : (
                  <WritePage category={selectedCategory} />
                )
              ) : (
                <>
                  <Daily>
                    <Category>일상</Category>
                    <DailyTitle>ㄴ</DailyTitle>
                    <DailyContent>ㄴ</DailyContent>
                  </Daily>
                  <Movies>
                    <Category>영화</Category>
                    <MovieTitle>ㄴ</MovieTitle>
                    <MovieContent>ㄴ</MovieContent>
                  </Movies>
                  <Music>
                    <Category>음악</Category>
                    <MusicTitle>ㄴ</MusicTitle>
                    <MusicContent>ㄴ</MusicContent>
                  </Music>
                  <Book>
                    <Category>독서</Category>
                    <BookTitle>ㄴ</BookTitle>
                    <BookContent>ㄴ</BookContent>
                  </Book>
                  <Essay>
                    <Category>에세이</Category>
                    <EssayTitle>ㄴ</EssayTitle>
                    <EssayContent>ㄴ</EssayContent>
                  </Essay>
                  <ETC>
                    <Category>기타</Category>
                    <ETCTitle>ㄴ</ETCTitle>
                    <ETCContent>ㄴ</ETCContent>
                  </ETC>
                </>
              )}
            </Content>
            <BtnContent
              isEditing={isEditing}
              currentStep={currentStep}
              style={{ display: "flex ", justifyContent: "space-between" }}
            >
              {isEditing ? (
                <>
                  {currentStep === 0 && (
                    <>
                      <PreviousBtn onClick={handlePreviousStep}>
                        이전 단계
                      </PreviousBtn>
                      <NextBtn onClick={handleNextStep}>다음 단계</NextBtn>
                    </>
                  )}
                  {currentStep === 1 && (
                    <>
                      <PreviousBtn onClick={handlePreviousStep}>
                        이전 단계
                      </PreviousBtn>
                      <SaveBtn onClick={() => setIsEditing(false)}>
                        등록하기
                      </SaveBtn>
                    </>
                  )}
                </>
              ) : (
                <WriteBtn onClick={handleEditClick}>작성하기</WriteBtn>
              )}
            </BtnContent>
          </Body>
        ) : (
          <Memo date={selectedDate} />
        )}
      </BodyContainer>
    </Container>
  );
};

export default Diary;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 462px;
  height: 480px;
  box-sizing: border-box;
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
  top: 171px;
  left: 767px;
  width: 480px;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: ${(props) =>
    props.isEditing && props.currentStep === 1 ? "420px" : "360px"};
  overflow-y: ${(props) =>
    props.isEditing && props.currentStep === 1 ? "hidden" : "auto"};
  box-sizing: border-box;
`;

const SubTitle = styled.div`
  display: flex;
  width: 100%;
  height: 29px;
  background-color: #f4f4f4;
  flex-direction: row;
  border-bottom: 1px solid black;
`;

const SubTitle1 = styled.div`
  display: flex;
  justify-content: center;
  border-right: 1px solid black;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  width: 43px;
`;

const SubTitle2 = styled(SubTitle1)`
  width: 73px;
`;

const SubTitle3 = styled(SubTitle1)`
  width: 343px;
  border-right: none;
`;

const Daily = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
`;

const Movies = styled(Daily)``;
const Book = styled(Daily)``;
const ETC = styled(Daily)``;
const Music = styled(Daily)``;
const Essay = styled(Daily)``;

const DailyTitle = styled(SubTitle2)`
  height: 89px;
  background-color: white;
  width: 77px;
`;

const DailyContent = styled(SubTitle3)`
  background-color: white;
`;

const Category = styled(SubTitle1)`
  width: 45px;
  background-color: ${({ theme }) => theme.background};
`;

const MovieTitle = styled(DailyTitle)``;
const MovieContent = styled(DailyContent)``;
const BookTitle = styled(DailyTitle)``;
const BookContent = styled(DailyContent)``;
const ETCTitle = styled(DailyTitle)``;
const ETCContent = styled(DailyContent)``;
const MusicTitle = styled(DailyTitle)``;
const MusicContent = styled(DailyContent)``;
const EssayTitle = styled(DailyTitle)``;
const EssayContent = styled(DailyContent)``;

const WriteBtn = styled.button`
  display: flex;
  right: 30px;
  bottom: 5px;
  position: absolute;
  align-items: center;
  cursor: pointer;
  text-decoration: underline;
`;

const SaveBtn = styled(WriteBtn)``;

const BtnContent = styled.div`
  width: 100%;
  border-top: ${(props) =>
    props.isEditing && props.currentStep === 1 ? "1px solid black" : ""};
  background-color: white;
  margin-top: ${(props) =>
    props.isEditing && props.currentStep === 1 ? "0" : "60px"};

  height: 28px;
`;

const WriteSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 360px;
  overflow-y: ${(props) =>
    props.isEditing && props.currentStep === 1 ? "hidden" : "auto"};
`;

const WriteItem = styled.div`
  display: flex;
  height: 62px;
  cursor: pointer;
  box-sizing: border-box;
  font-size: 14px;
  align-items: center;
  border-bottom: 1px solid black;
  border-top: ${({ isSelected }) => (isSelected ? "1.5px solid #0066FF" : "")};
  border-right: ${({ isSelected }) =>
    isSelected ? "1.5px solid #0066FF" : ""};
  border-bottom: ${({ isSelected }) =>
    isSelected ? "1.5px solid #0066FF" : ""};
  border-left: ${({ isSelected }) => (isSelected ? "1.5px solid #0066FF" : "")};
  transform: ${({ isSelected }) => (isSelected ? "translateZ(5px)" : "none")};
`;

const WriteCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  width: 44px;
  background-color: white;
  height: 59px;
  border-right: 1px solid black;
  box-sizing: border-box;
`;

const WriteTitle = styled.div`
  width: 73px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 59px;
  background-color: white;
  border-right: 1px solid black;
  text-align: center;
`;

const WriteContent = styled.div`
  background-color: white;
  text-align: center;
  flex: 1;
  height: 59px;
`;

const PreviousBtn = styled.button`
  cursor: pointer;
  padding-left: 10px;
  text-decoration: underline;
  border: none;
`;

const NextBtn = styled(PreviousBtn)``;
