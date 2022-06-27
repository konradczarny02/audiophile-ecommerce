import styled from 'styled-components';

type Props = {
  isOpen: boolean;
};

export const StyledNav = styled.div<Props>`
  width: 100vw;
  padding: 32px 24px;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  transition: transform 0.6s ease-in-out;
  top: 80px;
  left: 0;
  transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  z-index: -1;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  }

  /* &::before {
    content: '';
    position: absolute;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    height: 100%;
    width: 100%;
    z-index: -12;
  }*/

  @media (min-width: 768px) {
    top: 90px;
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;
