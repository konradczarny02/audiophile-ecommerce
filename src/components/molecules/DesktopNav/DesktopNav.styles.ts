import styled from 'styled-components';

export const DesktopNavList = styled.ul`
  display: none;

  @media (min-width: 1440px) {
    width: 420px;
    height: 100%;
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
