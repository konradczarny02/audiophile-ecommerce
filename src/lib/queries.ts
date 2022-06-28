export const headerQuery = `
         {
          allHeaders {
            id
            description
            productName
            imageMobile {
              url
            }
            imageDesktop {
              url
            }
            imageTablet {
              url
            }
          }
        }
      `;

type Image = {
  url: string;
};

export type HeaderResponse = {
  id: string;
  description: string;
  productName: string;
  imageMobile: Image;
  imageDesktop: Image;
  imageTablet: Image;
};
