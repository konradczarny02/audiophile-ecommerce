import { Image } from 'types/sharedTypes';

export type Category = {
  id: string;
  name: string;
  path: string;
  thumbnail: Image;
};

export type CategoriesData = {
  data: {
    allCategories: Category[];
  };
};
