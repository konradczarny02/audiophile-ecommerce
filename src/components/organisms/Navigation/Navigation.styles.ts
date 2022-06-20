import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  width: 100%;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.black};

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
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGray};
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    margin: 0 40px;
    width: calc(100% - 80px);
    padding: 0;
    justify-content: flex-start;

    svg:nth-child(2) {
      margin-left: 42px;
    }

    svg:nth-child(4) {
      margin-left: auto;
    }
  }

  @media (min-width: 1440px) {
    width: calc(100% - 320px);
    margin: 0 160px;
    justify-content: space-between;

    svg:nth-child(4) {
      margin-left: 0;
    }
  }
`;
