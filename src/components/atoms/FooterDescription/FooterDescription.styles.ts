import styled from 'styled-components';

export const StyledDescription = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkGray};
  flex-basis: 100%;
  text-align: center;
  margin: 24px 0;
`;
