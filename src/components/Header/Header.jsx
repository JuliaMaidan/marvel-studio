import logo from "../../images/logo/logodesk.png";
import { HeaderWrapper, InputWrapper } from "./Header.styled";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="section">
        <a className="link" href="/">
          <img className="logo" src={logo} alt="MarvelAdventure" />
        </a>
        <InputWrapper>
          <input className="input" type="text" placeholder="search" />
          <button className="btn">
            <FiSearch className="svg" size={16} />
          </button>
        </InputWrapper>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
