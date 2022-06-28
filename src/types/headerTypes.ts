import { Image } from 'types/sharedTypes';

export type HeaderInfo = {
  id: string;
  description: string;
  productName: string;
  imageMobile: Image;
  imageDesktop: Image;
  imageTablet: Image;
};

export type HeaderData = {
  data: {
    allHeaders: HeaderInfo[];
  };
};
