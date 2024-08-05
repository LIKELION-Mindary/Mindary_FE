import React, { useState } from "react";
import { axiosInstance } from "../../api/api";
import styled from "styled-components";
import moment from "moment";
import { downloadFile } from "./DownloadFile";

const MonthResult = ({ selectedDate }) => {
  const formattedDate = moment(selectedDate).format("YYYY-MM-DD");
  const [image_url, setImage_URL] = useState(null);

  const getMonthResult = async () => {
    try {
      const response = await axiosInstance.get(
        `/mindary/records/get-wordcloud?date=${formattedDate}&wordcloud=month`,
        { image_url: image_url },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      setImage_URL(response.data.image_url);
      if (response.data.image_url) {
        downloadFile(response.data.image_url, "월말 결산.pdf");
      }
    } catch (error) {
      console.error("Error fetching URL: ", error);
    }
  };

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
    lastWeekStart.setDate(lastWeekStart.getDate() - 6);
    return date >= lastWeekStart;
  };
  const today = new Date();
  const currentMonth = getMonthName(today);
  const previousMonth = getPreviousMonthName(today);
  const reportMonth = isLastWeekOfMonth(today) ? currentMonth : previousMonth;

  return (
    <Month>
      <Container>
        <Title>{`${reportMonth}의 월말 결산 (매월 마지막주 업데이트)`}</Title>
        <PdfBlock onClick={getMonthResult}>월말 결산.pdf</PdfBlock>
      </Container>
      <Detail>지난 결산들은 Archive 탭에서 확인 가능합니다.</Detail>
    </Month>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 342px;
  margin-top: 29px;
  border: 1px solid black;
`;

const Title = styled.span`
  display: flex;
  align-items: center;
  height: 29px;
  font-size: 16px;
  padding-left: 10px;
  border-bottom: 1px solid black;
  background-color: ${({ theme }) => theme.background};
`;

const PdfBlock = styled.div`
  display: flex;
  padding-left: 10px;
  align-items: center;
  cursor: pointer;
  text-decoration: underline;
  height: 29px;
`;
const Detail = styled.div`
  display: flex;
  align-items: center;
  width: 416px;
  height: 29px;
  font-size: 14px;
  padding-left: 10px;
  font-weight: 400;
  color: #cccccc;
`;

const Month = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "PreVariable";
`;

export default MonthResult;
