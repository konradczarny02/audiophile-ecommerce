import styled from 'styled-components';

export const StyledLink = styled.a`
  text-decoration: none;
  padding: 16px 32px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.orange};
  margin: 4px 0;
`;
