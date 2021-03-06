import { Container, ContentWrapper } from 'components/organisms/Navigation/Navigation.styles';
import Logo from 'components/atoms/Logo/Logo';
import CartIcon from 'components/atoms/CartIcon/CartIcon';
import Hamburger from 'components/atoms/Hamburger/Hamburger';
import { useState } from 'react';
import DesktopNav from 'components/molecules/DesktopNav/DesktopNav';
import MobileNav from 'components/molecules/MobileNav/MobileNav';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavOpen = () => setIsOpen((prevState) => !prevState);
  return (
    <>
      <Container>
        <ContentWrapper>
          <Hamburger isOpen={isOpen} handleNavOpen={handleNavOpen} />
          <Logo />
          <DesktopNav />
          <CartIcon />
        </ContentWrapper>
      </Container>
      <MobileNav isOpen={isOpen} />
    </>
  );
};

export default Navigation;
