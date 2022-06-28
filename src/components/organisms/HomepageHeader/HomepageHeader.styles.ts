import styled from 'styled-components';
import bg from 'assets/images/homepage/image-header.jpg';
import { Title } from 'components/atoms/Title/Title';

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
  background-image: url('${({ images }) => images.mobile}');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 550px;

  @media (min-width: 768px) {
    background-image: url('${({ images }) => images.tablet}');
    height: 640px;
  }

  @media (min-width: 1440px) {
    background-image: url('${({ images }) => images.desktop}');
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

    @media (min-width: 1440px) {
      text-align: left;
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
