import Link from 'next/link';
import ChevronRight from 'public/chevron-right.svg';
import { StyledCategoryLink, ImageWrapper } from 'components/atoms/CategoryLink/CategoryLink.styles';
import Image, { StaticImageData } from 'next/image';

type Props = {
  data: {
    img: StaticImageData;
    name: string;
    path: string;
  };
};

const CategoryLink = ({ data: { img, name, path } }: Props) => {
  return (
    <StyledCategoryLink>
      <ImageWrapper>
        <Image src={img} alt={`${name} photo`} />
      </ImageWrapper>
      <h4>{name}</h4>
      <Link href={path} passHref>
        <a>
          <p>SHOP</p>
          <ChevronRight />
        </a>
      </Link>
    </StyledCategoryLink>
  );
};

export default CategoryLink;
