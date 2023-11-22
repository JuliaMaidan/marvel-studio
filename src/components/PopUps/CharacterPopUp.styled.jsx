import styled from "styled-components";

export const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background: #0c0b0b;
  border: 2px solid #000;
  z-index: 1000;

  //   @media (min-width: 768px) {
  //     top: 50%;
  //     left: 50%;
  //     transform: translate(-50%, -50%);
  //   }

  & .section {
    width: 335px;
    padding-top: 14px;

    @media (min-width: 768px) {
      width: 536px;
      padding-top: 16px;
    }
  }

  & .close__btn {
    background-color: transparent;
    border: none;
    margin-left: auto;
    margin-bottom: 6px;

    @media (min-width: 768px) {
      margin-bottom: 20px;
    }

    & svg {
      fill: #fafafa;
      width: 20px;
      height: 20px;

      @media (min-width: 768px) {
        width: 28px;
        height: 28px;
      }
    }
  }

  & .image {
    width: 295px;
    height: 387px;
    border-radius: 8px;
    margin-bottom: 16px;
    margin-inline: auto;

    @media (min-width: 768px) {
      width: 332px;
      height: 445px;
      margin-left: 0;
    }
  }
`;

export const InfoWrapper = styled.div`
  padding: 32px 16px;
  border-radius: 8px;
  background: #171717;
  width: 263px;
  margin-inline: auto;

  @media (min-width: 768px) {
    width: 536px;
  }

  & .name {
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.36px;

    @media (min-width: 768px) {
      font-size: 24px;
      letter-spacing: -0.48px;
    }
  }

  & .date {
    color: rgba(250, 250, 250, 0.5);
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 16px;

    @media (min-width: 768px) {
      width: 536px;
    }
  }

  & .info {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 32px;

    @media (min-width: 768px) {
      width: 536px;
    }
  }

  & .list__name {
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.36px;
    margin-bottom: 16px;

    @media (min-width: 768px) {
      width: 536px;
    }
  }
`;

export const Comics = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;

  & .comics__img {
    width: 263px;
    height: 263px;
    border-radius: 8px;
    margin-bottom: 16px;
  }

  & .comics__name {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.28px;
  }

  & .comics__hero {
    color: rgba(250, 250, 250, 0.5);
    font-size: 12px;
    line-height: 14px;
  }
`;
