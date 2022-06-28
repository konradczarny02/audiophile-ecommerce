import { StyledLink } from 'components/atoms/ProductLink/ProductLink.styles';
import Link from 'next/link';

type Props = {
  path: string;
};

const ProductLink = ({ path }: Props) => {
  return (
    <Link href={path}>
      <StyledLink>SEE PRODUCT</StyledLink>
    </Link>
  );
};

export default ProductLink;
