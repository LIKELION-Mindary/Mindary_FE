import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";

const Navbar = () => {
  return (
    <Bar>
      <LogoContainer>
        <Link to="/">
          <Logo src={logo} />
        </Link>
      </LogoContainer>
      <RecordButtonContainer>
        <Link to="/record" style={{ textDecoration: "none" }}>
          <RecordBtn>Record</RecordBtn>
        </Link>
      </RecordButtonContainer>
    </Bar>
  );
};

const RecordButtonContainer = styled.div`
  position: absolute;
  right: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const RecordBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 200;
`;

const Logo = styled.img`
  width: 105px;
  height: auto;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-bottom: 2px solid black;
  width: 100%;
  padding: 20px 0;
  position: relative;
`;

export default Navbar;
