import styled from "styled-components";

export const RandomWrapper = styled.section`
  padding-top: 80px;

  @media (min-width: 768px) {
    padding-top: 128px;
  }

  @media (min-width: 1440px) {
    padding-top: 168px;
  }

  & .title {
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
      margin-bottom: 58px;
    }

    @media (min-width: 1440px) {
      margin-bottom: 63px;
    }
  }

  & .box {
    @media (min-width: 1440px) {
      display: flex;
      gap: 32px;
    }
  }

  & .image {
    border-radius: 8px;
    width: 355px;
    height: 355px;

    @media (min-width: 768px) {
      width: 704px;
      height: 704px;
    }

    @media (min-width: 1440px) {
      width: 496px;
      height: 704px;
      object-fit: cover;
    }
  }
`;

export const Characters = styled.ul`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 32px;
  }

  & .character {
    padding-block: 32px;
    border-bottom: 1px solid rgba(250, 250, 250, 0.2);
  }

  & .name {
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.36px;
    margin-bottom: 16px;

    @media (min-width: 768px) {
      font-size: 24px;
      letter-spacing: -0.48px;
    }
  }

  & .desc {
    color: rgba(250, 250, 250, 0.5);
    font-size: 14px;
    line-height: 18px;

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }

  & .active {
    color: #4b50ad;
  }
`;
