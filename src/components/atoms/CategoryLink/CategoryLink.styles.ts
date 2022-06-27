import styled from 'styled-components';

export const ImageWrapper = styled.div`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
`;

export const StyledCategoryLink = styled.li`
  flex-basis: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.lighterGray};
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 68px;
  padding-top: 50px;

  @media (min-width: 768px) {
    flex-basis: 32.5%;
    margin: 108px auto 64px;
  }

  h4 {
    margin-top: 40px;
    flex-basis: 100%;
    font-size: 15px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
    text-transform: uppercase;
  }

  a {
    flex-basis: 100%;
    margin: 16px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    p {
      font-size: 13px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.black};
      opacity: 0.8;
    }

    svg {
      margin-left: 12px;

      @media (min-width: 768px) {
        margin-left: 12px !important;
      }
    }
  }
`;
