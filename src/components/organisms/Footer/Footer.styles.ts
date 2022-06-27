import styled from 'styled-components';
import Logo from 'components/atoms/Logo/Logo';

export const StyledFooter = styled.footer`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lighterBlack};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 24px;

  @media (min-width: 768px) {
    padding: 0 40px;
    justify-content: flex-start;
  }

  svg {
    margin: 48px 0;

    @media (min-width: 768px) {
      margin: 60px 0 32px;
      flex-basis: 100%;
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
      left: 40px;
      transform: none;
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

  li {
    flex-basis: 100%;
    text-align: center;
    margin-top: 16px;

    @media (min-width: 768px) {
      text-align: left;
      flex-basis: auto;
    }

    li:first-child {
      margin-top: 0;
    }

    li:last-child {
      margin-bottom: 0;
    }
  }
`;
