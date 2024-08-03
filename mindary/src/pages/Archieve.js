import styled, {
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import Navbar from "../components/Navbar/Navbar1";
import Header from "../components/Header/Header";
import { useTheme } from "../styles/ThemeContext";
import DefaultExcel from "../components/Background/DefaultExcel";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import moment from "moment-timezone";
import SelectInput from "../components/Archieve/SelectInput";
import { axiosInstance } from "../api/api";
import { useEffect } from "react";

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

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Items per page for category results
  const [keywordItemsPerPage] = useState(5); // Items per page for keyword results
  const [categoryResults, setCategoryResults] = useState([]);
  const [keywordResults, setKeywordResults] = useState([
    "Keyword Result 1",
    "Keyword Result 2",
    "Keyword Result 3",
    "Keyword Result 4",
    "Keyword Result 5",
    "Keyword Result 6",
    "Keyword Result 7",
    "Keyword Result 8",
    "Keyword Result 9",
    "Keyword Result 10",
    "Keyword Result 11",
    "Keyword Result 12",
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = [
    { value: "일상", label: "일상" },
    { value: "독서", label: "독서" },
    { value: "영화", label: "영화" },
    { value: "음악", label: "음악" },
    { value: "에세이", label: "에세이" },
    { value: "기타", label: "기타" },
    { value: "북마크", label: "북마크" },
  ];

  // Pagination for category results
  const indexOfLastCategoryItem = currentPage * itemsPerPage;
  const indexOfFirstCategoryItem = indexOfLastCategoryItem - itemsPerPage;
  const currentCategoryItems = categoryResults.slice(
    indexOfFirstCategoryItem,
    indexOfLastCategoryItem
  );
  const totalCategoryPages = Math.ceil(categoryResults.length / itemsPerPage);

  // Pagination for keyword results
  const [currentKeywordPage, setCurrentKeywordPage] = useState(1);
  const indexOfLastKeywordItem = currentKeywordPage * keywordItemsPerPage;
  const indexOfFirstKeywordItem = indexOfLastKeywordItem - keywordItemsPerPage;
  const currentKeywordItems = keywordResults.slice(
    indexOfFirstKeywordItem,
    indexOfLastKeywordItem
  );
  const totalKeywordPages = Math.ceil(
    keywordResults.length / keywordItemsPerPage
  );

  const handlePageChange = (event) => {
    const pageNumber = Number(event.target.value);
    if (pageNumber > 0 && pageNumber <= totalCategoryPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleKeywordPageChange = (event) => {
    const pageNumber = Number(event.target.value);
    if (pageNumber > 0 && pageNumber <= totalKeywordPages) {
      setCurrentKeywordPage(pageNumber);
    }
  };
  const handleCategoryChange = (selectedValue) => {
    console.log("Selected Category:", selectedValue);
    setSelectedCategory(selectedValue);
  };

  useEffect(() => {
    const GetCategoryResults = async () => {
      if (selectedCategory) {
        try {
          const response = await axiosInstance.get(
            `mindary/records/archive?category=${selectedCategory}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
              },
            }
          );
          setCategoryResults(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching category results:", error);
        }
      }
    };
    GetCategoryResults();
  }, [selectedCategory]);

  useEffect(() => {
    const categoryFromUrl = queryParams.get("category");
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [location.search]);

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
              {currentKeywordItems.map((item, index) => (
                <KeywordContainer key={index}>
                  <SubTitle>일상/2024.08.01</SubTitle>
                  <ResultContent>{item}</ResultContent>
                </KeywordContainer>
              ))}
              <PageContent>
                <PageInfo style={{ border: "none" }}>페이지 설정</PageInfo>
                <PageMoveInput
                  type="number"
                  min="1"
                  max={totalKeywordPages}
                  value={currentKeywordPage}
                  onChange={handleKeywordPageChange}
                />
                / {totalKeywordPages}
              </PageContent>
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
              <SearchBar style={{ border: "none" }}>
                <SelectInput
                  id="category"
                  options={categories.map((category) => category.label)} // 옵션으로 표시할 라벨을 전달합니다.
                  placeholder="카테고리를 선택하세요."
                  onChange={handleCategoryChange} // 선택된 값이 변경될 때 호출되는 함수
                />
              </SearchBar>
            </KeywordSearching>
            <KeywordResult>
              <Title>{selectedCategory}</Title>
              <CategoryResult>
                <HeaderRow>
                  <CategoryDate style={{ background: theme.background }}>
                    날짜
                  </CategoryDate>
                  <CategoryTitle style={{ background: theme.background }}>
                    제목
                  </CategoryTitle>
                </HeaderRow>
                {currentCategoryItems.map((item, index) => (
                  <CategoryContainer key={index}>
                    <CategoryDate>
                      {moment(item.created_at).format("YY.MM.DD")}
                    </CategoryDate>
                    <CategoryTitle>{item.title}</CategoryTitle>
                  </CategoryContainer>
                ))}
                <PageContent1>
                  <PageInfo>페이지 설정</PageInfo>
                  <PageMoveInput
                    type="number"
                    min="1"
                    max={totalCategoryPages}
                    value={currentPage}
                    onChange={handlePageChange}
                  />
                  / {totalCategoryPages}
                </PageContent1>
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
  height: 510px;
  width: 344px;
`;

const KeywordContainer = styled.div`
  border: 1px solid black;
  box-sizing: border-box;
  height: 60px;
  width: 344px;
  margin-bottom: 30px;
`;

const ResultContainer = styled.div`
  border: 1px solid black;
  box-sizing: border-box;
  height: 60px;
  width: 256px;
  margin-bottom: 30px;
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

const CategoryResult = styled.div`
  height: 360px;
  width: 100%;
  border: 1px solid black;
  box-sizing: border-box;
  position: relative;
`;

const PageContent = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 343px;
  box-sizing: border-box;
  background-color: white;
  border-left: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  left: 0;
`;

const PageContent1 = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 29px;
  box-sizing: border-box;
  background-color: white;
  left: 0;
`;

const PageInfo = styled.div`
  display: flex;
  align-items: center;
  width: 119px;
  height: 29px;
  display: flex;
  box-sizing: border-box;
  padding-left: 10px;
  border-right: 1px solid black;
`;

const PageMoveInput = styled.input`
  margin-left: 5px;
  width: 44px;
  background-color: #e9e9e9;
  height: 22px;
  border: none;
  text-align: right;
  box-shadow: 0px 0px 2px 0px rgb(0, 0, 0, 0, 0.25) inset;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f0f0f0;
`;
const CategoryDate = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  height: 29px;
  padding-left: 10px;
  border-bottom: 1px solid black;
  width: 126px;
  border-right: 1px solid black;
  background-color: white;
  box-sizing: border-box;
`;
const CategoryTitle = styled(CategoryDate)`
  flex: 1;
  border-right: none;
`;

const CategoryContainer = styled.div`
  height: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
`;
