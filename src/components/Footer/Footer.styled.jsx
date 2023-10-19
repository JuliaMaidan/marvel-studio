import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100vw;
  background: #34387f;
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
