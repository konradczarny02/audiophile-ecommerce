import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.2rem;

  @media (min-width: 768px) {
    font-size: 56px;
  }
`;
