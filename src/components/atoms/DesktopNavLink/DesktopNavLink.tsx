import Link from 'next/link';
import { StyledLink } from 'components/atoms/DesktopNavLink/DesktopNavLink.styles';

type Props = {
  link: string;
  name: string;
};

const DesktopNavLink = ({ link, name }: Props) => {
  return (
    <Link href={link} passHref>
      <StyledLink>{name}</StyledLink>
    </Link>
  );
};

export default DesktopNavLink;
