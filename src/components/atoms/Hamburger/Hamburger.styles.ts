import styled from 'styled-components';

type Props = {
  isOpen: boolean;
};

export const StyledHamburger = styled.button<Props>`
  width: 16px;
  height: 15px;
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  overflow: hidden;

  @media (min-width: 1440px) {
    display: none;
  }

  div {
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.white};
    transition: transform 0.2s ease-in-out;
  }

  div:nth-child(1) {
    transform: translateY(${({ isOpen }) => (isOpen ? '6px' : '0')}) rotate(${({ isOpen }) => (isOpen ? '45deg' : '0')});
  }

  div:nth-child(2) {
    transform: translateX(${({ isOpen }) => (isOpen ? '-100%' : '0')});
  }

  div:nth-child(3) {
    transform: translateY(${({ isOpen }) => (isOpen ? '-6px' : '0')})
      rotate(${({ isOpen }) => (isOpen ? '-45deg' : '0')});
  }
`;
