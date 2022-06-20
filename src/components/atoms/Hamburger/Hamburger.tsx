import { StyledHamburger } from 'components/atoms/Hamburger/Hamburger.styles';

type Props = {
  isOpen: boolean;
  handleNavOpen: () => void;
};

const Hamburger = ({ isOpen, handleNavOpen }: Props) => {
  return (
    <StyledHamburger isOpen={isOpen} onClick={handleNavOpen}>
      <div></div>
      <div></div>
      <div></div>
    </StyledHamburger>
  );
};

export default Hamburger;
