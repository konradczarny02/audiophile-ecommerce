import styled from 'styled-components';

export const Wrapper = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lighterBlack};
`;

export const StyledFooter = styled.div`
  position: relative;
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 24px;

  @media (min-width: 768px) {
    padding: 0;
    width: 90%;
    margin: 0 auto;
    justify-content: flex-start;
  }

  @media (min-width: 1440px) {
    width: 80%;
    margin: 0 auto;
    max-width: 1600px;
  }

  svg {
    margin: 48px 0;

    @media (min-width: 768px) {
      margin: 60px 0 32px;
      flex-basis: 100%;
    }

    @media (min-width: 1440px) {
      margin-top: 72px;
      flex-basis: 50%;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.orange};

    @media (min-width: 768px) {
      left: 0;
      transform: none;
    }

    @media (min-width: 1440px) {
      left: 0;
    }
  }
`;

export const LinksWrapper = styled.ul`
  margin: 0 0 24px;
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    flex-basis: 50%;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin: 0;
  }

  @media (min-width: 1440px) {
    margin: 72px 0 0;
  }

  li {
    flex-basis: 100%;
    text-align: center;
    margin-top: 16px;
    cursor: pointer;

    @media (min-width: 768px) {
      text-align: left;
      flex-basis: auto;
    }

    @media (min-width: 1440px) {
      margin-top: 0;
    }

    li:first-child {
      margin-top: 0;
    }

    li:last-child {
      margin-bottom: 0;
    }
  }
`;
