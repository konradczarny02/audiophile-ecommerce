import styled from 'styled-components';

export const StyledFooter = styled.footer`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lighterBlack};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 24px;

  svg {
    margin: 48px 0;
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
  }
`;

export const LinksWrapper = styled.ul`
  margin: 24px 0;
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  li {
    flex-basis: 100%;
    text-align: center;
    margin-top: 16px;

    li:first-child {
      margin-top: 0;
    }

    li:last-child {
      margin-bottom: 0;
    }
  }
`;
