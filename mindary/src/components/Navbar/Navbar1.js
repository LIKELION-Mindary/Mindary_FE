import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";

const Navbar1 = () => {
  return (
    <Bar>
      <SectionA>A</SectionA>
      <SectionB>B</SectionB>
      <SectionC>C</SectionC>
      <SectionD>D</SectionD>
      <SectionMode>Mode: ⚫</SectionMode>
      <RecordSection>
        <Link to="/record">
          <SectionRecord>Record</SectionRecord>
        </Link>
      </RecordSection>
      <ArchieveSection>
        <Link to="/archieve">
          <SectionArchieve>Archieve</SectionArchieve>
        </Link>
      </ArchieveSection>
    </Bar>
  );
};

const Bar = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 40px;
  font-size: 14px;
  font-weight: 400;
  width: 100%;
  height: 30px;
  color: black;
  background-color: transparent;
  z-index: 1000;
`;

const SectionA = styled.div`
  position: fixed;
  margin-left: 125px;
`;

const SectionB = styled.div`
  position: fixed;
  margin-left: 385px;
`;

const SectionC = styled.div`
  position: fixed;
  margin-left: 650px;
`;

const SectionD = styled.div`
  position: fixed;
  margin-left: 810px;
`;

const SectionMode = styled.div`
  position: fixed;
  margin-left: 895px;
  cursor: pointer;
  text-decoration: none;
  box-shadow: inset 0 -1px 0 0 black;
  padding-bottom: 2px;
`;

const SectionRecord = styled.div`
  position: fixed;
  margin-left: 1023px;
`;

const SectionArchieve = styled.div`
  position: absolute;
  margin-left: 1175px;
`;

const RecordSection = styled.div`
  font-size: 14px;
  display: flex;
  top: 48px;
  position: fixed;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`;

const ArchieveSection = styled(RecordSection)``;

export default Navbar1;
