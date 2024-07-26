import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FooterExcel = () => {
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
        <IndexE />
        <IndexF />
        <IndexMode />
        <IndexRecord />
        <IndexNull1 />
        <IndexArchieve />
        <IndexNull2 />
        <IndexNull3 />
      </Index>

      {rows.map((_, rowIndex) => {
        if (rowIndex === 22) {
          return (
            <ExcelRow key={rowIndex}>
              <Num>{rowIndex + 1}</Num>
              <SectionA>&nbsp;학교명</SectionA>
              <SectionB>&nbsp;팀명</SectionB>
              <SectionC>&nbsp;서비스명</SectionC>
              <SectionD>&nbsp;참여자</SectionD>
              <SectionE />
              <SectionF />
              <SectionMode />
              <SectionRecord />
              <SectionNull1 />
              <SectionArchieve />
              <SectionNull2 />
              <SectionNull3 />
            </ExcelRow>
          );
        }
        if (rowIndex === 23) {
          return (
            <ExcelRow key={rowIndex}>
              <Num>{rowIndex + 1}</Num>
              <SectionA>&nbsp; 홍익대학교</SectionA>
              <SectionB>&nbsp;mind on</SectionB>
              <SectionC>&nbsp;Mindary</SectionC>
              <SectionD1>
                &nbsp;진예원 박소은 강민석 원채영 김태경 문덕영
              </SectionD1>
              <SectionMode />
              <SectionRecord />
              <SectionNull1 />
              <SectionArchieve />
              <SectionNull2 />
              <SectionNull3 />
            </ExcelRow>
          );
        }
        return (
          <ExcelRow key={rowIndex}>
            <Num>{rowIndex + 1}</Num>
            <SectionA />
            <SectionB />
            <SectionC />
            <SectionD />
            <SectionE />
            <SectionF />
            <SectionMode />
            <SectionRecord />
            <SectionNull1 />
            <SectionArchieve />
            <SectionNull2 />
            <SectionNull3 />
          </ExcelRow>
        );
      })}
    </ExcelBody>
  );
};

export default FooterExcel;

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
  display: flex;
  align-items: center;
  color: #b3b3b3;
  font-size: 14px;
  width: 132px;
  height: 30px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background-color: white;
`;

const SectionB = styled(SectionA)`
  width: 131px;
`;

const Num = styled(SectionA)`
  width: 60px;
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
  background-color: #e6e6e6;
`;

const SectionC = styled(SectionA)`
  width: 106px;
`;

const SectionD = styled(SectionA)`
  width: 98px;
`;

const SectionD1 = styled.div`
  display: flex;
  align-items: center;
  color: #b3b3b3;
  font-size: 14px;
  background-color: white;
  width: 414px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const SectionE = styled(SectionA)`
  width: 216px;
  display: flex;
  align-items: center;
  color: #b3b3b3;
  font-size: 14px;
  height: 30px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background-color: white;
`;

const SectionF = styled(SectionA)`
  width: 98px;
`;

const SectionMode = styled(SectionA)`
  width: 107px;
`;

const SectionRecord = styled(SectionA)`
  width: 132px;
`;

const SectionNull1 = styled(SectionA)`
  width: 20px;
`;

const SectionArchieve = styled(SectionA)`
  width: 131px;
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

const IndexE = styled(SectionE)`
  background-color: #e6e6e6;
`;

const IndexF = styled(SectionF)`
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
