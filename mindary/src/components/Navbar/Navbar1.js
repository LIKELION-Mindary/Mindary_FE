import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTheme } from "../../styles/ThemeContext";

const Navbar1 = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Bar>
      <SectionA>A</SectionA>
      <SectionB>B</SectionB>
      <SectionC>C</SectionC>
      <SectionD>D</SectionD>
      <SectionE>E</SectionE>
      <SectionF>F</SectionF>
      <SectionMode onClick={toggleTheme}>Mode : {theme.modeIcon}</SectionMode>
      <RecordSection>
        <Link to="/record">
          <SectionRecord>Record</SectionRecord>
        </Link>
      </RecordSection>
      <SectionNull />
      <ArchieveSection>
        <Link to="/archieve">
          <SectionArchieve>Archieve</SectionArchieve>
        </Link>
      </ArchieveSection>
      <SectionNull1 />
      <SectionNull2 />
    </Bar>
  );
};

const Bar = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 52px;
  font-size: 14px;
  font-weight: 400;
  width: 100%;
  height: 30px;
  color: black;
  background-color: transparent;
  z-index: 1000;
`;

const SectionA = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  position: fixed;
  margin-left: 61px;
  width: 132px;
`;

const SectionB = styled(SectionA)`
  margin-left: 192px;
  width: 133px;
`;

const SectionC = styled(SectionA)`
  margin-left: 325px;
  width: 106px;
`;

const SectionD = styled(SectionA)`
  margin-left: 433px;
  width: 98px;
`;

const SectionE = styled(SectionA)`
  margin-left: 532px;
  width: 216px;
`;
const SectionF = styled(SectionA)`
  margin-left: 749px;
  width: 98px;
`;

const SectionMode = styled(SectionA)`
  margin-left: 848px;
  width: 107px;
  cursor: pointer;
  text-decoration: underline;
`;

const SectionRecord = styled(SectionA)`
  margin-left: 956px;
  width: 132px;
`;

const SectionNull = styled(SectionA)`
  margin-left: 1088px;
  width: 20px;
`;

const SectionArchieve = styled(SectionA)`
  margin-left: 1109px;
  width: 131px;
`;

const SectionNull1 = styled(SectionA)`
  margin-left: 1240px;
  width: 40px;
`;

const RecordSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  display: flex;
  top: 60px;
  position: fixed;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`;

const ArchieveSection = styled(RecordSection)``;
const SectionNull2 = styled(SectionA)`
  flex-grow: 1;
`;
export default Navbar1;
