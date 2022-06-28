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

export const categoriesQuery = `{
  allCategories {
    id
    name,
    path
    thumbnail {
      url
    }
  }
}`;
