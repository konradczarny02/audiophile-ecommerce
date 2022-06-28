import {
  StyledHeader,
  H3,
  Wrapper,
  LinkWrapper,
  Description,
} from 'components/organisms/HomepageHeader/HomepageHeader.styles';
import { Title } from 'components/atoms/Title/Title';
import ProductLink from 'components/atoms/ProductLink/ProductLink';
import { HeaderResponse } from 'lib/queries';

type Props = {
  data: HeaderResponse;
};

const HomepageHeader = ({ data: { description, id, imageMobile, imageTablet, imageDesktop, productName } }: Props) => {
  return (
    <StyledHeader images={{ mobile: imageMobile.url, tablet: imageTablet.url, desktop: imageDesktop.url }}>
      <Wrapper>
        <H3>NEW PRODUCT</H3>
        <Title>{productName}</Title>
        <Description>{description}</Description>
        <LinkWrapper>
          <ProductLink path="/" />
        </LinkWrapper>
      </Wrapper>
    </StyledHeader>
  );
};

export default HomepageHeader;
