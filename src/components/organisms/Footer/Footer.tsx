import { StyledFooter, LinksWrapper, Wrapper } from 'components/organisms/Footer/Footer.styles';
import Logo from 'components/atoms/Logo/Logo';
import { pages } from 'components/molecules/DesktopNav/data';
import DesktopNavLink from 'components/atoms/DesktopNavLink/DesktopNavLink';
import FooterDescription from 'components/atoms/FooterDescription/FooterDescription';
import SocialMediaIcons from 'components/atoms/SocialMediaIcons/SocialMediaIcons';

const Footer = () => {
  return (
    <Wrapper>
      <StyledFooter>
        <Logo />
        <LinksWrapper>
          {pages.map(({ name, path }) => (
            <li key={name}>
              <DesktopNavLink name={name} link={path} />
            </li>
          ))}
        </LinksWrapper>
        <FooterDescription />
        <SocialMediaIcons />
      </StyledFooter>
    </Wrapper>
  );
};

export default Footer;
