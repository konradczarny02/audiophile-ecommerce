import styled from 'styled-components';

export const SocialMediaWrapper = styled.ul`
  flex-basis: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-bottom: 36px;

  li {
    svg {
      margin: 0;
    }
  }

  @media (min-width: 768px) {
    flex-basis: 40%;
    margin-bottom: 48px;
    margin-left: auto;
    justify-content: flex-end;
  }

  li:nth-child(2) {
    margin: 0 16px;
  }
`;
