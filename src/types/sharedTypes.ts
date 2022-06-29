import { StaticImageData } from 'next/image';

export type Image = {
  url: StaticImageData | string;
  width: number;
  height: number;
};

export type DynamicImage = {
  url: string;
  width: number;
  height: number;
};
