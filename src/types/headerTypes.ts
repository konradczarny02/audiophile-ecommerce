import { DynamicImage } from 'types/sharedTypes';

export type HeaderInfo = {
  id: string;
  description: string;
  productName: string;
  imageMobile: DynamicImage;
  imageDesktop: DynamicImage;
  imageTablet: DynamicImage;
};

export type HeaderData = {
  data: {
    allHeaders: HeaderInfo[];
  };
};
