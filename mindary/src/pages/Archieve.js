import styled, {
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import Navbar from "../components/Navbar/Navbar1";
import Header from "../components/Header/Header";
import { useTheme } from "../styles/ThemeContext";
import DefaultExcel from "../components/Background/DefaultExcel";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import moment from "moment-timezone";

const Archieve = () => {
  const { theme, toggleTheme } = useTheme();

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const urlDate = queryParams.get("date");
  const initialDate = urlDate
    ? moment.tz(urlDate, "Asia/Seoul").toDate()
    : new Date(); // Fallback to current date if no date in URL

  const [selectedDate, setSelectedDate] = useState(initialDate);

  return (
    <StyledThemeProvider theme={theme}>
      <Mainpage>
        <HeaderBase>
          <Header />
        </HeaderBase>
        <DefaultExcel />
        <Navbar
          toggleTheme={toggleTheme}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <Container>
          <KeywordSection>
            <KeywordSearching>
              <Title>검색</Title>
              <SearchBar>
                <SearchInput placeholder="키워드로 검색하세요." />
                <SearchBtn>검색</SearchBtn>
              </SearchBar>
            </KeywordSearching>
            <KeywordResult>
              <Title>검색결과</Title>
              <ResultContainer>
                <SubTitle>일상/2024.08.01</SubTitle>
                <ResultContent>제목</ResultContent>
              </ResultContainer>
            </KeywordResult>
          </KeywordSection>
          <DateSection>
            <KeywordSearching>
              <Title>검색</Title>
              <SearchBar>
                <YearInput placeholder="2024" />
                <InputInfo>년</InputInfo>
                <MonthInput placeholder="8" />
                <InputInfo style={{ borderRight: "none" }}>월</InputInfo>
              </SearchBar>
            </KeywordSearching>
            <KeywordResult>
              <Title>지난 결산</Title>
              <ResultContainer>
                <SubTitle
                  style={{
                    backgroundColor: theme.background,
                  }}
                >
                  7월의 월말결산
                </SubTitle>
                <ResultContent>제목</ResultContent>
              </ResultContainer>
            </KeywordResult>
          </DateSection>
          <CategorySection>
            <KeywordSearching>
              <Title>검색</Title>
              <SearchBar>
                <CategoryInput placeholder="카테고리를 선택하세요." />
                <DropdownBtn>요기</DropdownBtn>
              </SearchBar>
            </KeywordSearching>
            <KeywordResult>
              <Title>일상</Title>
              <CategoryResult>
                <SubTitle
                  style={{
                    backgroundColor: theme.background,
                  }}
                >
                  날짜
                </SubTitle>
                <ResultContent
                  style={{
                    borderBottom: "1px solid black",
                    boxSizing: "border-box",
                  }}
                ></ResultContent>
                <ResultContent
                  style={{
                    borderBottom: "1px solid black",
                    boxSizing: "border-box",
                    height: "30px",
                  }}
                >
                  제목
                </ResultContent>
              </CategoryResult>
            </KeywordResult>
          </CategorySection>
        </Container>
      </Mainpage>
    </StyledThemeProvider>
  );
};
export default Archieve;

const Mainpage = styled.div``;

const HeaderBase = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
`;

const Container = styled.div`
  top: 142px;
  left: 167px;
  position: fixed;
  display: flex;
  justify-content: center;
`;
const KeywordSection = styled.div`
  width: 344px;
`;
const DateSection = styled.div`
  width: 256px;
  margin-left: 119px;
`;
const CategorySection = styled.div`
  width: 344px;
  margin-left: 119px;
`;

const KeywordSearching = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Title = styled.span`
  display: flex;
  align-items: center;
  font-weight: 700;
  height: 30px;
  font-size: 18px;
  padding-left: 5px;
`;

const SearchBar = styled.div`
  border: 1px solid black;
  box-sizing: border-box;
  height: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;

const SearchInput = styled.input`
  display: flex;
  align-items: center;
  width: 85%;
  border: none;
  padding-left: 10px;
  &::placeholder {
    color: #cccccc;
    font-size: 14px;
  }
`;

const SearchBtn = styled.button`
  width: 15%;
  height: 100%;
  box-sizing: border-box;
  border-left: 1px solid black;
  text-decoration: underline;
`;

const KeywordResult = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ResultContainer = styled.div`
  border: 1px solid black;
  box-sizing: border-box;
  height: 60px;
`;

const SubTitle = styled.span`
  font-size: 16px;
  font-weight: 400;
  height: 29px;
  width: 100%;
  display: flex;
  padding-left: 10px;
  align-items: center;
  background-color: #e9e9e9;
  box-sizing: border-box;
  border-bottom: 1px solid black;
`;

const ResultContent = styled.div`
  background-color: white;
  height: 29px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const InputInfo = styled.span`
  height: 29px;
  width: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  border-left: 1px solid black;
  box-sizing: border-box;
`;
const YearInput = styled.input`
  width: 109px;
  border: none;
  text-align: right;
  padding-right: 5px;
`;
const MonthInput = styled.input`
  border: none;
  padding-right: 5px;
  text-align: right;
  width: 90px;
`;
const CategoryInput = styled(SearchInput)``;
const DropdownBtn = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid black;
  box-sizing: border-box;
`;
const CategoryResult = styled.div`
  height: 360px;
  width: 100%;
  border: 1px solid black;
  overflow-y: auto;
  box-sizing: border-box;
`;
