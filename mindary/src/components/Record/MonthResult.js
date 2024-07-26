import React from "react";
import styled from "styled-components";

const MonthResult = () => {
  const getMonthName = (date) => {
    return `${date.getMonth() + 1}월`;
  };

  const getPreviousMonthName = (date) => {
    const previousMonthDate = new Date(
      date.getFullYear(),
      date.getMonth() - 1,
      1
    );
    return `${previousMonthDate.getMonth() + 1}월`;
  };

  const isLastWeekOfMonth = (date) => {
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const lastWeekStart = new Date(lastDayOfMonth);
    lastWeekStart.setDate(lastWeekStart.getDate() - 6); // Adjust to the start of the last week
    return date >= lastWeekStart;
  };
  const today = new Date();
  const currentMonth = getMonthName(today);
  const previousMonth = getPreviousMonthName(today);
  const reportMonth = isLastWeekOfMonth(today) ? currentMonth : previousMonth;

  return (
    <Container>
      <Title>{`${reportMonth}의 월말 결산 (매월 마지막주 업데이트)`}</Title>
      <PdfBlock>{`${reportMonth} 월말 결산.pdf`}</PdfBlock>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 416px;
  margin-top: 31px;
  border: 1px solid black;
`;

const Title = styled.span`
  display: flex;
  align-items: center;
  height: 30px;
  font-size: 16px;
  padding-left: 10px;
  border-bottom: 1px solid black;
  background-color: #f6fae6;
`;

const PdfBlock = styled.div`
  display: flex;
  padding-left: 10px;
  align-items: center;
  text-decoration: underline;
  height: 29px;
`;

export default MonthResult;
