import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;

  & .section {
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px) {
      padding-top: 24px;
    }
  }

  & .link {
    display: block;
  }

  & .logo {
    display: block;
    width: 98px;
    height: 15px;

    @media (min-width: 768px) {
      width: 202px;
      height: 31px;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;

  & .input {
    padding-block: 6px;
    padding-inline: 40px 18px;
    width: 52px;
    background-color: transparent;
    border-radius: 1000px;
    border: 1px solid rgba(250, 250, 250, 0.3);
    color: #fafafa;
    font-size: 12px;
    text-transform: capitalize;

    &::placeholder {
      color: #fafafa;
      font-size: 12px;
      font-weight: 500;
      line-height: 14px;
      text-transform: uppercase;
    }
  }

  & .btn {
    position: absolute;
    left: 12px;
    top: 1px;
    height: 100%;
    border: none;
    background-color: transparent;
    border-radius: 50px;
  }

  & .svg {
    stroke: #fafafa;
  }
`;
