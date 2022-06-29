import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';
import bg from '/assets/images/image-header2-PhotoRoom.png';

type HeaderProps = {
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

export const H3 = styled.h3`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.8;
  font-weight: 400;
  letter-spacing: 0.4rem;
`;

export const StyledHeader = styled.header<HeaderProps>`
  width: 100%;
  display: flex;
  background: url('${({ images }) => images.mobile}') no-repeat center,
    linear-gradient(
      90deg,
      rgba(16, 16, 16, 1) 0%,
      rgba(28, 28, 28, 1) 20%,
      rgba(38, 38, 38, 1) 50%,
      rgba(28, 28, 28, 1) 80%,
      rgba(16, 16, 16, 1) 100%
    );
  height: 550px;
  background-size: contain;

  @media (min-width: 500px) {
    background: url('${({ images }) => images.tablet}') no-repeat center,
      linear-gradient(
        90deg,
        rgba(16, 16, 16, 1) 0%,
        rgba(28, 28, 28, 1) 15%,
        rgba(38, 38, 38, 1) 50%,
        rgba(28, 28, 28, 1) 85%,
        rgba(16, 16, 16, 1) 100%
      );
    background-size: contain;
  }

  @media (min-width: 768px) {
    background: url('${({ images }) => images.tablet}') no-repeat center,
      linear-gradient(
        90deg,
        rgba(16, 16, 16, 1) 0%,
        rgba(28, 28, 28, 1) 25%,
        rgba(38, 38, 38, 1) 50%,
        rgba(28, 28, 28, 1) 75%,
        rgba(16, 16, 16, 1) 100%
      );
    background-size: contain;
    height: 640px;
  }

  @media (min-width: 1440px) {
    background: url('${({ images }) => images.desktop}') no-repeat center,
      linear-gradient(
        90deg,
        rgba(16, 16, 16, 1) 0%,
        rgba(28, 28, 28, 1) 10%,
        rgba(50, 50, 50, 1) 50%,
        rgba(28, 28, 28, 1) 90%,
        rgba(16, 16, 16, 1) 100%
      );
    background-size: contain;
  }

  @media (min-width: 1600px) {
    background: url('${({ images }) => images.desktop}') no-repeat center,
      linear-gradient(
        90deg,
        rgba(16, 16, 16, 1) 0%,
        rgba(28, 28, 28, 1) 20%,
        rgba(50, 50, 50, 1) 50%,
        rgba(28, 28, 28, 1) 80%,
        rgba(16, 16, 16, 1) 100%
      );
    background-size: contain;
  }

  @media (min-width: 1900px) {
    background: url('${({ images }) => images.desktop}') no-repeat center,
      linear-gradient(
        90deg,
        rgba(16, 16, 16, 1) 0%,
        rgba(28, 28, 28, 1) 30%,
        rgba(50, 50, 50, 1) 50%,
        rgba(28, 28, 28, 1) 70%,
        rgba(16, 16, 16, 1) 100%
      );
    background-size: contain;
  }
`;

export const Description = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.8;
`;

export const Wrapper = styled.div`
  flex-basis: 90%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 1440px) {
    flex-basis: 30%;
    margin-left: 10%;
  }

  @media (min-width: calc(1600px / 0.8)) {
    margin-left: calc((100% - 1600px) / 2);
  }

  ${H3} {
    margin-bottom: 16px;
    flex-basis: 100%;
    text-align: center;

    @media (min-width: 768px) {
      margin-bottom: 24px;
    }

    @media (min-width: 1440px) {
      text-align: left;
    }
  }

  ${Title} {
    text-align: center;
    flex-basis: 50%;

    @media (min-width: 1440px) {
      text-align: left;
      margin-right: auto;
    }
  }

  ${Description} {
    flex-basis: 80%;
    margin: 24px auto;
    text-align: center;

    @media (min-width: 768px) {
      margin: 24px auto 36px;
      flex-basis: 60%;
    }

    @media (min-width: 1440px) {
      margin: 24px auto 24px 0;
      text-align: left;
    }
  }
`;

export const LinkWrapper = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 1440px) {
    justify-content: flex-start;
  }
`;
