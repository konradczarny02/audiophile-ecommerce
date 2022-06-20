import DesktopNavLink from 'components/atoms/DesktopNavLink/DesktopNavLink';
import { DesktopNavList } from 'components/molecules/DesktopNav/DesktopNav.styles';

const pages = [
  {
    name: 'HOME',
    path: '/',
  },
  {
    name: 'HEADPHONES',
    path: '/headphones',
  },
  {
    name: 'SPEAKERS',
    path: '/speakers',
  },
  {
    name: 'EARPHONES',
    path: '/earphones',
  },
];

const DesktopNav = () => {
  return (
    <DesktopNavList>
      {pages.map(({ path, name }) => (
        <DesktopNavLink link={path} name={name} key={name} />
      ))}
    </DesktopNavList>
  );
};

export default DesktopNav;
