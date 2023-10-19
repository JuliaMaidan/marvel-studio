import styled from "styled-components";

export const Section = styled.section`
  padding-top: 92px;

  @media (min-width: 768px) {
    padding-top: 146px;
  }

  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    padding-top: 0;
  }
`;

export const Wrapper = styled.div`
  & .web {
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;

    margin-bottom: 14px;

    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 28.8px;
      margin-bottom: 16px;
    }

    @media (min-width: 1440px) {
      margin-top: 210px;
    }
  }

  & .title {
    font-size: 44px;
    font-weight: 500;
    line-height: 44px;
    letter-spacing: -0.88px;
    margin-bottom: 16px;

    @media (min-width: 768px) {
      font-size: 80px;
      line-height: 80px;
      letter-spacing: -1.6px;
    }

    @media (min-width: 1440px) {
      width: 527px;
    }
  }

  & .desc {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 18px;
      margin-bottom: 32px;
      width: 473px;
    }

    @media (min-width: 1440px) {
      width: 527px;
    }
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 1000px;
  background: #600404;
  border: none;

  color: #fafafa;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  text-transform: uppercase;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    padding: 12px 24px;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 32px;
  }

  @media (min-width: 1440px) {
    padding: 12px 24px;
    margin-bottom: 0;
  }

  .slider {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-container {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    transition: transform 0.5s;
  }

  .hero-1 {
    transform: translateY(0%);
  }

  .hero-2 {
    transform: translateY(-100%);
  }

  .hero-3 {
    transform: translateY(-200%);
  }

  .hero {
    width: 100%;
    height: 100%;
    /* Стилізуйте вміст героїв за потребою */
  }
`;
