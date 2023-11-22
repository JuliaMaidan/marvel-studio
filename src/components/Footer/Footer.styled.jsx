import styled from "styled-components";

export const FooterWrapper = styled.footer``;

export const BlackBox = styled.div`
  padding-block: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (min-width: 768px) {
    padding-block: 68px;
    justify-content: space-between;
  }

  & .logo {
    width: 98px;
    height: 15px;
    margin-right: 158px;

    @media (min-width: 768px) {
      width: 202px;
      height: 31px;
      margin-right: 0;
    }
  }

  & .text {
    font-size: 14px;
    line-height: 18px;

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 23px;
  margin-inline: auto;

  @media (min-width: 768px) {
    margin: 0;
    // margin-left: auto;
    gap: 16px;
  }

  & .btn {
    width: 32px;
    height: 32px;
    border: 1px solid rgba(250, 250, 250, 0.15);
    background-color: transparent;
    border-radius: 6px;
    fill: #fafafa;
    position: relative;

    @media (min-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }

  & .icon {
    fill: inherit;
    width: 14px;
    height: 14px;
    position: absolute;
    top: 8px;
    left: 8px;

    @media (min-width: 768px) {
      width: 18px;
      height: 18px;
      top: 10px;
      left: 10px;
    }
  }
`;

export const BrightBox = styled.div`
  background-color: #34387f;
  padding-block: 16px;

  @media (min-width: 768px) {
    padding-block: 18px;
  }

  & .text {
    color: rgba(250, 250, 250, 0.4);
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.2px;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.28px;
    }
  }
`;
