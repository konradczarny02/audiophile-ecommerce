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
  left: 0;
  bottom: 80px;
  transform: translateY(${({ isOpen }) => (isOpen ? 'calc(100% + 80px)' : '0')});
  z-index: -1;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  }

  @media (min-width: 768px) {
    bottom: 90px;
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;
