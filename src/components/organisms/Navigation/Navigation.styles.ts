import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  width: 100%;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.lighterBlack};
  position: relative;
  z-index: 22;

  @media (min-width: 768px) {
    height: 90px;
  }

  @media (min-width: 1440px) {
    height: 96px;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 24px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (min-width: 768px) {
    margin: 0 auto;
    width: 90%;
    padding: 0;
    justify-content: flex-start;

    svg:nth-child(2) {
      margin-left: 42px;
    }

    svg:nth-child(5) {
      margin-left: auto;
    }
  }

  @media (min-width: 1440px) {
    width: 80%;
    margin: 0 auto;
    justify-content: space-between;
    max-width: 1600px;

    svg:nth-child(2) {
      margin-left: 0;
    }

    svg:nth-child(5) {
      margin-left: 0;
    }
  }
`;
