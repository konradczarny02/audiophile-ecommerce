import { Wrapper } from 'components/organisms/Navigation/Navigation.styles';
import Logo from 'components/atoms/Logo/Logo';
import CartIcon from 'components/atoms/CartIcon/CartIcon';
import Hamburger from 'components/atoms/Hamburger/Hamburger';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavOpen = () => setIsOpen((prevState) => !prevState);
  return (
    <Wrapper>
      <Hamburger isOpen={isOpen} handleNavOpen={handleNavOpen} />
      <Logo />
      <CartIcon />
    </Wrapper>
  );
};

export default Navigation;
