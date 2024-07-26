import React from "react";
import styled from "styled-components";
import ReactCalendar from "../components/Record/ReactCalendar";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Diary from "../components/Record/Diary";
import { Link } from "react-router-dom";
import excel from "../assets/images/excel1.svg";
import MonthResult from "../components/Record/MonthResult";
import WeekResult from "../components/Record/WeekResult";

const Calendar = () => {
  return (
    <Mainpage>
      <HeaderBase>
        <Header />
      </HeaderBase>
      <Navbar />
      <Container>
        <Content>
          <CalendarBox>
            <ReactCalendar />
            <Result>
              <WeekResult />
              <MonthResult />
            </Result>
          </CalendarBox>
          <Diary />
        </Content>
      </Container>
    </Mainpage>
  );
};

export default Calendar;

const Mainpage = styled.div`
  aspect-ratio: 16 / 9;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 40px;
  height: 100%;
  flex-direction: row;
  align-items: center;
  background-image: url(${excel});
  background-size: contain;
  background-repeat: no-repeat;
  position: fixed;
`;

const CalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 59px;
  margin-right: 105px;
  width: 424px;
  height: 502px;
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
  left: 137px;
  top: 163px;
  position: fixed;
`;

const Result = styled.div`
  display: flex;
  margin-top: 124px;
  width: 417px;
  height: 150px;
  flex-direction: column;
`;
