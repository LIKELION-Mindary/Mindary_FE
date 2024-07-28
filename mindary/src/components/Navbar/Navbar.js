import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = ({ toggleTheme }) => {
  const initial = "black";
  const [theme, setTheme] = useState(initial);
  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "black" ? "green" : "black"));
    toggleTheme();
  };
  return (
    <Bar>
      <SectionA>A</SectionA>
      <SectionB>B</SectionB>
      <SectionC>C</SectionC>
      <SectionD>D</SectionD>
      <SectionMode onClick={handleToggleTheme}>
        Mode: {theme === "green" ? "🟢" : "⚫"}
      </SectionMode>
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
  z-index: 1000;
`;

const SectionA = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  margin-left: 61px;
  width: 132px;
`;

const SectionB = styled(SectionA)`
  margin-left: 193px;
  width: 416px;
`;

const SectionC = styled(SectionA)`
  position: fixed;
  margin-left: 610px;
  width: 103px;
`;

const SectionD = styled(SectionA)`
  position: fixed;
  margin-left: 713px;
  width: 137px;
`;

const SectionMode = styled(SectionA)`
  margin-left: 853px;
  cursor: pointer;
  width: 107px;
  text-decoration: underline;
`;

const SectionRecord = styled(SectionA)`
  position: fixed;
  margin-left: 960px;
  width: 133px;
`;

const SectionNull = styled(SectionA)`
  margin-left: 1088px;
  width: 20px;
`;

const SectionNull1 = styled(SectionA)`
  width: 40px;
  margin-left: 1240px;
`;

const SectionNull2 = styled(SectionA)`
  flex-grow: 1;
`;

const SectionArchieve = styled(SectionA)`
  margin-left: 1113px;
  width: 131px;
`;

const RecordSection = styled.div`
  font-size: 14px;
  display: flex;
  top: 60px;
  position: fixed;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`;

const ArchieveSection = styled(RecordSection)``;

export default Navbar;
