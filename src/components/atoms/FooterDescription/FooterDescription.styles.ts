import styled from 'styled-components';

export const StyledDescription = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.7;
  flex-basis: 100%;
  text-align: center;
  margin: 24px 0;

  @media (min-width: 768px) {
    text-align: left;
    margin: 32px 0 80px;
  }
`;

export const StyledCopyright = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.7;
  flex-basis: 100%;
  text-align: center;
  margin: 24px 0;

  @media (min-width: 768px) {
    flex-basis: 50%;
    text-align: left;
    margin: 0;
  }
`;
