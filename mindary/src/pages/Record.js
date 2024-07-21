import React from "react";
import styled from "styled-components";
import ReactCalendar from "../components/Record/ReactCalendar";
import Navbar from "../components/Navbar/Navbar";
import Diary from "../components/Record/Diary";
import { Link } from "react-router-dom";

const Calendar = () => {
  return (
    <Mainpage>
      <Navbar />
      <Container>
        <CalendarBox>
          <ReactCalendar />
          <Diary />
        </CalendarBox>
      </Container>
    </Mainpage>
  );
};

export default Calendar;

const Mainpage = styled.div``;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  left: 0;
  position: fixed;
  width: 100%;
  margin-top: 50px;
`;

const CalendarBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  margin: 30px;
`;
