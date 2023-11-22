import styled from "styled-components";

export const CharactersLit = styled.ul`
  display: grid;
  grid-gap: 35px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 елементи в ряду */
    grid-gap: 16px 32px;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr); /* 2 елементи в ряду */
    grid-gap: 64px 16px;
  }

  & .image {
    width: 335px;
    height: 445px;
    margin-bottom: 16px;
    border-radius: 8px;

    @media (min-width: 768px) {
      width: 335px;
    }

    @media (min-width: 1440px) {
      width: 332px;
    }
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
`;

export const InputsList = styled.div`
  & .label {
    color: rgba(250, 250, 250, 0.3);
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px; /* 116.667% */
  }

  & .input {
    padding: 14px 24px;
    border-radius: 100px;
    border: 2px solid #34387f;
    background: #171717;
  }
`;
