import { useEffect, useState } from "react";
import styled from "styled-components";

const DefaultExcel = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const rowCount = Math.floor(window.innerHeight / 30) - 2; // 2는 인덱스 행과 기타 여백을 고려
      setRows(Array.from({ length: rowCount }));
    };

    handleResize(); // 초기 계산
    window.addEventListener("resize", handleResize); // 창 크기 변경 시 재계산

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <ExcelBody>
      <Index>
        <Indexnum />
        <IndexA />
        <IndexB />
        <IndexC />
        <IndexD />
        <IndexMode />
        <IndexRecord />
        <IndexNull1 />
        <IndexArchieve />
        <IndexNull2 />
        <IndexNull3 />
      </Index>
      {rows.map((_, rowIndex) => (
        <ExcelRow key={rowIndex}>
          <Num>{rowIndex + 1}</Num>
          <SectionA />
          <SectionB />
          <SectionC />
          <SectionD />
          <SectionMode />
          <SectionRecord />
          <SectionNull1 />
          <SectionArchieve />
          <SectionNull2 />
          <SectionNull3 />
        </ExcelRow>
      ))}
    </ExcelBody>
  );
};
export default DefaultExcel;

const ExcelBody = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 52px;
`;

const ExcelRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const SectionA = styled.div`
  width: 132px;
  height: 30px;
  font-size: 14px;
  border-right: 1px solid rgb(0, 0, 0, 0.2);
  border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  background-color: white;
`;

const SectionB = styled(SectionA)`
  width: 416px;
`;

const Num = styled(SectionA)`
  width: 60px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e6e6e6;
`;

const SectionC = styled(SectionA)`
  width: 103px;
`;

const SectionD = styled(SectionA)`
  width: 137px;
`;

const SectionMode = styled(SectionA)`
  width: 108px;
`;

const SectionRecord = styled(SectionA)`
  width: 132px;
`;

const SectionNull1 = styled(SectionA)`
  width: 20px;
`;

const SectionArchieve = styled(SectionA)`
  width: 132px;
`;

const SectionNull2 = styled(SectionA)`
  width: 40px;
`;
const SectionNull3 = styled(SectionA)`
  flex-grow: 1;
`;

const Indexnum = styled(Num)``;

const IndexA = styled(SectionA)`
  background-color: #e6e6e6;
`;
const IndexB = styled(SectionB)`
  background-color: #e6e6e6;
`;

const IndexC = styled(SectionC)`
  background-color: #e6e6e6;
`;

const IndexD = styled(SectionD)`
  background-color: #e6e6e6;
`;

const IndexMode = styled(SectionMode)`
  background-color: #e6e6e6;
`;
const IndexRecord = styled(SectionRecord)`
  background-color: #e6e6e6;
`;
const IndexNull1 = styled(SectionNull1)`
  background-color: #e6e6e6;
`;
const IndexArchieve = styled(SectionArchieve)`
  background-color: #e6e6e6;
`;
const IndexNull2 = styled(SectionNull2)`
  background-color: #e6e6e6;
`;
const IndexNull3 = styled(SectionNull3)`
  background-color: #e6e6e6;
`;

const Index = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
