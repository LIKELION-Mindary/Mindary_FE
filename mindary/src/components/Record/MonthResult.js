import styled from "styled-components";
const MonthResult = () => {
  return (
    <Container>
      <Title>7월의 월말 결산 (매월 마지막주 업데이트)</Title>
      <PdfBlock>2024.07. 월말 결산.pdf</PdfBlock>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 422px;
  margin-top: 30px;
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
