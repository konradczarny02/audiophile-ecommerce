import { StaticImageData } from 'next/image';

export type Image = {
  url: string | StaticImageData;
  width: number;
  height: number;
};
