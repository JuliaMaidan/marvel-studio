import styled from "styled-components";
import image from "../../images/error/vector.png";

export const Container = styled.section`
  background-image: url(${image});
  background-size: 267px 152px;
  background-repeat: no-repeat;
  background-position: top 43px center;
  padding-block: 103px 123px;

  @media (min-width: 768px) {
    padding-block: 211px 210px;
    background-size: 375px 221px;
    background-position: top 128px center;
  }

  & .text {
    width: 151px;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.36px;
    text-align: center;
    margin-inline: auto;

    @media (min-width: 768px) {
      width: 192px;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: -0.48px;
    }
  }
`;
