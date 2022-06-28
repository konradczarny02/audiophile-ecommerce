import styled from 'styled-components';
import bg from 'assets/images/homepage/image-header.jpg';
import { Title } from 'components/atoms/Title/Title';
import ProductLink from 'components/atoms/ProductLink/ProductLink';

export const H3 = styled.h3`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.8;
  font-weight: 400;
  letter-spacing: 0.4rem;
`;

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  background-image: url('${bg.src}');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 600px;
`;

export const Description = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.8;
`;

export const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${H3} {
    margin-bottom: 16px;
    flex-basis: 100%;
    text-align: center;

    @media (min-width: 768px) {
      margin-bottom: 24px;
    }
  }

  ${Title} {
    text-align: center;
  }

  ${Description} {
    flex-basis: 80%;
    margin: 24px auto;
    text-align: center;

    @media (min-width: 768px) {
      margin: 24px auto 36px;
      flex-basis: 60%;
    }
  }
`;

export const LinkWrapper = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: center;
`;

const HomepageHeader = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <H3>NEW PRODUCT</H3>
        <Title>
          XX99 MARK II <br /> HEADPHONES
        </Title>
        <Description>
          Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
        </Description>
        <LinkWrapper>
          <ProductLink path="/" />
        </LinkWrapper>
      </Wrapper>
    </StyledHeader>
  );
};

export default HomepageHeader;
