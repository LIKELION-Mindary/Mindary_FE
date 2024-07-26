import React, { useState } from "react";
import styled from "styled-components";
import ReactCalendar from "../components/Record/ReactCalendar";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Diary from "../components/Record/Diary";
import { Link } from "react-router-dom";
import MonthResult from "../components/Record/MonthResult";
import WeekResult from "../components/Record/WeekResult";
import DefaultExcel from "../components/Background/DefaultExcel";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Mainpage>
      <HeaderBase>
        <Header />
      </HeaderBase>
      <DefaultExcel />
      <Navbar />
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
  );
};

export default Calendar;

const Mainpage = styled.div``;

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 40px;
  height: 100%;
  flex-direction: row;
  align-items: center;
  position: fixed;
`;

const CalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 59px;
  margin-right: 105px;
  width: 424px;
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
  left: 134px;
  top: 166px;
  position: fixed;
`;

const Result = styled.div`
  display: flex;
  position: fixed;
  top: 516px;
  width: 417px;
  height: 150px;
  flex-direction: column;
`;
