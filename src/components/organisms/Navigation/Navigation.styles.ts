import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 80px;
  width: 100%;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
