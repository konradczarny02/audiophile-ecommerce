import DesktopNavLink from 'components/atoms/DesktopNavLink/DesktopNavLink';
import { DesktopNavList } from 'components/molecules/DesktopNav/DesktopNav.styles';
import { pages } from 'components/molecules/DesktopNav/data';

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
