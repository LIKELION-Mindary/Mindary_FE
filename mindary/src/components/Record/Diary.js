import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment-timezone";
import Memo from "./Memo";
import { Toggle } from "./Toggle";
import WritePage from "./WritePage";
import { axiosInstance } from "../../api/api";
import { useNavigate, useLocation } from "react-router-dom";

const Diary = ({ selectedDate }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isChat, setIsChat] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [memos, setMemos] = useState([]);
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    liked: false,
  });

  const formattedDate = moment(selectedDate)
    .tz("Asia/Seoul")
    .format("YYYY-MM-DD");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const mode = queryParams.get("mode");
    setIsChat(mode === "record");

    setIsEditing(false);
    setCurrentStep(0);
    setSelectedCategory(null);
  }, [location]);

  useEffect(() => {
    if (!isChat) {
      getRecords();
    } else {
      getMemos();
    }
  }, [isChat, selectedDate]);

  const getMemos = async () => {
    try {
      const response = await axiosInstance.get(
        `/mindary?date=${formattedDate}&mode=chat`
      );
      setMemos(response.data);
    } catch (error) {
      console.error("Error fetching memos:", error);
    }
  };

  const getRecords = async () => {
    try {
      const response = await axiosInstance.get(
        `/mindary?date=${formattedDate}&mode=record`
      );
      setRecords(response.data);
    } catch (error) {
      console.error("Error fetching records:", error);
    }
  };

  const handleToggle = () => {
    const newMode = isChat ? "chat" : "record";
    setIsChat((prev) => !prev);
    navigate(`/mindary?date=${formattedDate}&mode=${newMode}`);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setCurrentStep(0);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handlePreviousStep = () => {
    if (currentStep === 1) {
      setSelectedCategory(null);
      setCurrentStep(0);
    } else {
      setIsEditing(false);
      setSelectedCategory(null);
      setCurrentStep(0);
    }
  };

  const handleNextStep = () => {
    if (selectedCategory) {
      setCurrentStep(1);
    }
  };
  const handleSave = async () => {
    try {
      await axiosInstance.post(`/mindary?date=${formattedDate}&mode=record`, {
        title: formData.title,
        category: selectedCategory,
        content: formData.content,
        liked: formData.liked,
      });
      alert("저장되었습니다.");
      setIsEditing(false);
      setFormData({ title: "", content: "", liked: false }); // Reset form data
      getRecords();
    } catch (error) {
      console.error("Failed to post data:", error);
      alert("저장 실패");
    }
  };
  const handleFormDataChange = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <Container>
      <TitleBox>
        <Title>
          {moment(selectedDate).tz("Asia/Seoul").format("M월 D일 일지")}
        </Title>
        <Toggle isOn={isChat} toggleHandler={handleToggle} />
      </TitleBox>
      <BodyContainer>
        {isChat ? (
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
                          <WriteTitle />
                          <WriteContent />
                        </WriteItem>
                      )
                    )}
                  </WriteSection>
                ) : (
                  <WritePage
                    selectedDate={selectedDate}
                    category={selectedCategory}
                    formData={formData}
                    onFormDataChange={handleFormDataChange}
                  />
                )
              ) : (
                records.map((record) => (
                  <Record key={record.id}>
                    <Category>{record.category}</Category>
                    <RecordTitle>{record.title}</RecordTitle>
                    <RecordContent>{record.content}</RecordContent>
                  </Record>
                ))
              )}
            </Content>
            <BtnContent
              isEditing={isEditing}
              currentStep={currentStep}
              style={{ display: "flex", justifyContent: "space-between" }}
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
                      <SaveBtn onClick={handleSave}>등록하기</SaveBtn>
                    </>
                  )}
                </>
              ) : (
                <WriteBtn onClick={handleEditClick}>작성하기</WriteBtn>
              )}
            </BtnContent>
          </Body>
        ) : (
          <Memo selectedDate={selectedDate} memos={memos} />
        )}
      </BodyContainer>
    </Container>
  );
};

export default Diary;

// Styled components
const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

const Body = styled.div`
  display: flex;
  position: relative;
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

const Record = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  flex-direction: row;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const RecordTitle = styled(SubTitle2)`
  height: 89px;
  background-color: white;
  width: 73px;
  font-weight: 400;
`;

const RecordContent = styled(SubTitle3)`
  background-color: white;
  font-weight: 400;
`;

const Category = styled(SubTitle1)`
  width: 43px;
  background-color: ${({ theme }) => theme.background};
`;

const WriteBtn = styled.button`
  display: flex;
  right: 3px;
  bottom: 5px;
  position: absolute;
  align-items: center;
  cursor: pointer;
  text-decoration: underline;
`;

const SaveBtn = styled(WriteBtn)``;

const BtnContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 29px;
  width: 100%;
  background-color: white;
  border-top: 1px solid black;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
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
