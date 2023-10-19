import styled from "styled-components";

export const Hero = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }

  & .firstImg {
    width: 190px;
    height: 256px;
    border-radius: 4px;
    background: #34387f;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      width: 336px;
      height: 540px;
      margin-top: 79px;
    }

    @media (min-width: 1440px) {
      width: 352px;
      height: 540px;
    }
  }

  & .box {
    width: 190px;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    position: relative;

    @media (min-width: 768px) {
      width: 336px;
    }

    @media (min-width: 1440px) {
      width: 352px;
    }

    &::after {
      content: "";
      position: absolute;
      top: 149px;
      left: 15px;
      width: 160px;
      height: 160px;
      background: #600404;
      border-radius: 50%;
      filter: blur(47px);

      @media (min-width: 768px) {
        top: 299px;
        left: 35px;
        width: 300px;
        height: 300px;
      }
    }
  }

  & .panther::after {
    background: linear-gradient(
      180deg,
      #34387f 36.46%,
      rgba(52, 56, 127, 0) 100%
    );
  }

  & .hulk::after {
    background: #5b7f3c;
  }

  & .secondImg {
    width: 100%;
    height: 256px;
    border-radius: 0px 0px 0px 4px;
    background: #171717;
    margin-left: auto;
    margin-bottom: 14px;
    z-index: 1;

    @media (min-width: 768px) {
      width: 336px;
      height: 540px;
      margin-bottom: 16px;
    }

    @media (min-width: 1440px) {
      width: 352px;
      height: 540px;
      margin-bottom: 32px;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  gap: 14px;
  z-index: 1;
  padding-top: 16px;
  border-top: 1px solid rgba(250, 250, 250, 0.15);

  @media (min-width: 768px) {
    gap: 46px;
  }

  & .name {
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.24px;
  }

  & .about {
    color: rgba(250, 250, 250, 0.5);
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.24px;
  }
`;
