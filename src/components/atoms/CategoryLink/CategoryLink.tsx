import Link from 'next/link';
import ChevronRight from 'public/chevron-right.svg';
import { StyledCategoryLink, ImageWrapper } from 'components/atoms/CategoryLink/CategoryLink.styles';
import Image, { StaticImageData } from 'next/image';
import { Image as ImageType } from 'types/sharedTypes';

type Props = {
  data: {
    thumbnail: ImageType;
    name: string;
    path: string;
  };
};

const CategoryLink = ({ data: { thumbnail, name, path } }: Props) => {
  return (
    <StyledCategoryLink>
      <ImageWrapper>
        <Image src={thumbnail.url} alt={`${name} photo`} width={thumbnail.width} height={thumbnail.height} />
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
