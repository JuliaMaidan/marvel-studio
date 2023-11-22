import styled from "styled-components";

export const LastComicsWrapper = styled.div`
  margin-top: 128px;

  & .caption {
    font-size: 28px;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: -0.56px;
    text-transform: uppercase;
    margin-bottom: 44px;

    @media (min-width: 768px) {
      font-size: 44px;
      line-height: 44px;
      letter-spacing: -0.88px;
      text-transform: uppercase;
      margin-bottom: 64px;
    }
  }
`;

export const ComicsList = styled.ul`
  display: flex;
  gap: 16px;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    // font-size: 44px;
    // line-height: 44px;
    // letter-spacing: -0.88px;
    // text-transform: uppercase;
    // margin-bottom: 64px;
  }

  & .image {
    width: 323px;
    height: 374px;
    margin-bottom: 14px;

    @media (min-width: 768px) {
      width: 448px;
      height: 519px;
      margin-bottom: 16px;
    }
  }

  & .comics {
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.36px;
    margin-bottom: 4px;

    @media (min-width: 768px) {
      font-size: 24px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: -0.48px;
      margin-bottom: 8px;
    }
  }

  & .hero {
    color: rgba(250, 250, 250, 0.5);
    font-size: 14px;
    line-height: 18px;

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 18px;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 32px;

  & .btn {
    background-color: #34387f;
    border: 1px solid transparent;
    width: 44px;
    height: 44px;
    border-radius: 50px;
    fill: #fafafa;
    position: relative;

    &:disabled {
      background-color: transparent;
      fill: #fafafa4d;
      border: 1px solid #fafafa4d;
    }
  }

  & .svg {
    position: absolute;
    top: 12px;
    left: 12px;
    fill: inherit;
    width: 18px;
    height: 18px;
  }
`;
