import headphonesImg from 'assets/images/navbar/image-xx99-mark-one-headphones.png';
import speakerImage from 'assets/images/navbar/image-zx9-speaker.png';
import earphoneImage from 'assets/images/navbar/image-yx1-earphones.png';
import { Category } from 'types/categoriesTypes';

export const navLinks: Category[] = [
  {
    id: '1',
    name: 'Headphones',
    path: '/headphones',
    thumbnail: { url: headphonesImg, width: 80, height: 104 },
  },
  {
    id: '2',
    name: 'Speakers',
    path: '/speakers',
    thumbnail: { url: speakerImage, width: 85, height: 101 },
  },
  {
    id: '3',
    name: 'Earphones',
    path: '/earphones',
    thumbnail: { url: earphoneImage, width: 103, height: 104 },
  },
];
