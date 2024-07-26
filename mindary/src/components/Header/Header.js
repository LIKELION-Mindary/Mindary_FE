import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";

const Header = () => {
  return (
    <Bar>
      <LogoContainer>
        <Link to="/">
          <Logo src={logo} />
        </Link>
      </LogoContainer>
    </Bar>
  );
};

const Logo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 68px;
  height: auto;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`;

const Bar = styled.div`
  background-color: black;
  width: 100%;
  position: fixed;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Header;
