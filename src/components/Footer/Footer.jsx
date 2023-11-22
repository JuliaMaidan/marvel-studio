import {
  FooterWrapper,
  BlackBox,
  BrightBox,
  ButtonsWrapper,
} from "./Footer.styled";
import logo from "../../images/logo/logotab.png";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";

const Footer = () => {
  return (
    <FooterWrapper>
      <BlackBox className="section">
        <img className="logo" src={logo} alt="Logo" />
        <p className="text">Characters</p>
        <ButtonsWrapper>
          <button className="btn">
            <FaFacebookF className="icon" />
          </button>
          <button className="btn">
            <FaInstagram className="icon" />
          </button>
          <button className="btn">
            <RiTwitterLine className="icon" />
          </button>
        </ButtonsWrapper>
      </BlackBox>
      <BrightBox>
        <p className="text">Privacy Policy Public Offering Agreement</p>
      </BrightBox>
    </FooterWrapper>
  );
};

export default Footer;
