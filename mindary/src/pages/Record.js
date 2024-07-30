import React, { useState } from "react";
import styled, {
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import ReactCalendar from "../components/Record/ReactCalendar";
import Navbar from "../components/Navbar/Navbar1";
import Header from "../components/Header/Header";
import Diary from "../components/Record/Diary";
import MonthResult from "../components/Record/MonthResult";
import WeekResult from "../components/Record/WeekResult";
import DefaultExcel from "../components/Background/DefaultExcel";
import { useTheme } from "../styles/ThemeContext";

const Record = () => {
  const { theme, toggleTheme } = useTheme();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <StyledThemeProvider theme={theme}>
      <Mainpage>
        <HeaderBase>
          <Header />
        </HeaderBase>
        <DefaultExcel />
        <Navbar toggleTheme={toggleTheme} />
        <Container>
          <Content>
            <CalendarBox>
              <ReactCalendar onDateChange={handleDateChange} />
              <Result>
                <WeekResult />
                <MonthResult />
              </Result>
            </CalendarBox>
            <Diary selectedDate={selectedDate} />
          </Content>
        </Container>
      </Mainpage>
    </StyledThemeProvider>
  );
};

export default Record;

const Mainpage = styled.div``;

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
  position: fixed;
`;

const CalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 105px;
  width: 425px;
  height: 501px;
`;

const HeaderBase = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  left: 287px;
  top: 207px;
  position: fixed;
`;

const Result = styled.div`
  display: flex;
  position: fixed;
  top: 501px;
  width: 417px;
  height: 150px;
  flex-direction: column;
`;
