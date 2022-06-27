import { StyledNav } from 'components/molecules/MobileNav/MobileNav.styles';
import CategoryLink from 'components/atoms/CategoryLink/CategoryLink';
import { navLinks } from 'components/molecules/MobileNav/data';

type Props = {
  isOpen: boolean;
};

const MobileNav = ({ isOpen }: Props) => {
  return (
    <StyledNav isOpen={isOpen}>
      <ul>
        {navLinks.map((navLink) => (
          <CategoryLink data={navLink} key={navLink.name} />
        ))}
      </ul>
    </StyledNav>
  );
};

export default MobileNav;
