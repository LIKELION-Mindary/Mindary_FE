import styled from "styled-components";

const WeekResult = () => {
  return (
    <Container>
      <Title>이번주 마음 결산</Title>
      <PdfBlock>240721.pdf</PdfBlock>
    </Container>
  );
};
export default WeekResult;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 416px;
  border: 1px solid black;
`;

const Title = styled.span`
  display: flex;
  align-items: center;
  height: 30px;
  font-size: 16px;
  padding-left: 10px;
  border-bottom: 1px solid black;
  background-color: #e6e6e6;
`;

const PdfBlock = styled.div`
  display: flex;
  padding-left: 10px;
  align-items: center;
  text-decoration: underline;
  height: 29px;
`;
