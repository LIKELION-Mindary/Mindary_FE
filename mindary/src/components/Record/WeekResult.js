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
  width: 342px;
  border: 1px solid black;
  font-family: 'PreVariable';
`;

const Title = styled.span`
  display: flex;
  align-items: center;
  height: 29px;
  font-size: 16px;
  padding-left: 10px;
  border-bottom: 1px solid black;
  background-color: #f4f4f4;
`;

const PdfBlock = styled.a`
  display: flex;
  padding-left: 10px;
  align-items: center;
  text-decoration: underline;
  height: 29px;
`;
