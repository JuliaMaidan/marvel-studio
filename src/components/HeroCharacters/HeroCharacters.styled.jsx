import spider from "../../images/hero/bg/mob.jpg";
import spiderDesk from "../../images/hero/bg/desk.jpg";
import comics from "../../images/comics/bg.jpg";
import styled from "styled-components";

export const Section = styled.section`
  padding-block: 220px 20px;

  @media (min-width: 768px) {
    padding-block: 278px 32px;
  }

  @media (min-width: 1440px) {
    padding-bottom: 64px;
  }

  &.characters-wrapper {
    background: linear-gradient(
        180deg,
        rgba(12, 11, 11, 0.31) 0%,
        rgba(12, 11, 11, 0) 100%
      ),
      url(${spider});
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 1440px) {
      background: linear-gradient(
          180deg,
          rgba(12, 11, 11, 0.31) 0%,
          rgba(12, 11, 11, 0) 100%
        ),
        url(${spiderDesk});
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  &.comics-wrapper {
    background: linear-gradient(91deg, rgba(12, 11, 11, 0) 78.74%, #0c0b0b 96%),
      linear-gradient(2deg, #0c0b0b 2.15%, rgba(12, 11, 11, 0) 32.65%),
      linear-gradient(84deg, #0c0b0b 4.87%, rgba(12, 11, 11, 0) 15.93%),
      linear-gradient(180deg, #0c0b0b 0%, rgba(12, 11, 11, 0) 72.35%),
      url(${comics}), lightgray 50%;
    background-color: #0c0b0b;
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 768px) {
      background-position: left 169px top;
    }
  }

  & .text {
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    margin-bottom: 14px;

    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 160%;
      margin-bottom: 27px;
    }
  }

  & .caption {
    font-size: 60px;
    font-weight: 500;
    line-height: 60px;
    letter-spacing: -1.2px;
    margin-bottom: 16px;

    @media (min-width: 768px) {
      font-size: 128px;
      line-height: 128px;
      letter-spacing: -2.56px;
    }

    @media (min-width: 1440px) {
      font-size: 150px;
      line-height: 150px;
      letter-spacing: -3px;
    }
  }

  & .desc {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.32px;
    margin-bottom: 65px;

    @media (min-width: 768px) {
      width: 469px;
      margin-bottom: 188px;
      margin-left: 88px;
    }

    @media (min-width: 1440px) {
      width: 436px;
      margin-bottom: 145px;
      margin-left: 88px;
    }
  }

  & .btn {
    padding: 10px 20px;
    border-radius: 1000px;
    border: 1px solid rgba(250, 250, 250, 0.5);
    background-color: transparent;

    color: #fafafa;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    text-transform: uppercase;
    display: block;
    margin-left: auto;

    @media (min-width: 768px) {
      padding: 12px 24px;
      font-size: 14px;
      line-height: 18px;
    }
  }
`;
