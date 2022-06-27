import { StaticImageData } from 'next/image';
import headphonesImg from 'assets/images/navbar/image-xx99-mark-one-headphones.png';
import speakerImage from 'assets/images/navbar/image-zx9-speaker.png';
import earphoneImage from 'assets/images/navbar/image-yx1-earphones.png';

type NavItem = {
  name: string;
  path: string;
  img: StaticImageData;
};

export const navLinks: NavItem[] = [
  {
    name: 'Headphones',
    path: '/headphones',
    img: headphonesImg,
  },
  {
    name: 'Speakers',
    path: '/speakers',
    img: speakerImage,
  },
  {
    name: 'Earphones',
    path: '/earphones',
    img: earphoneImage,
  },
];
