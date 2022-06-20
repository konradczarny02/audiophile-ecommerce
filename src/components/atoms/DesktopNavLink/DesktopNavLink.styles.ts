import styled from 'styled-components';

export const StyledLink = styled.a`
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;
