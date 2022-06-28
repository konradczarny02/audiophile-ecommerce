import CategoryLink from 'components/atoms/CategoryLink/CategoryLink';
import { StyledList } from 'components/molecules/CategoriesList/CategoriesList.styles';
import { Category } from 'types/categoriesTypes';

type Props = {
  categories: Category[];
};

const CategoriesList = ({ categories }: Props) => {
  return (
    <StyledList>
      {categories.map((category) => (
        <CategoryLink data={category} key={category.id} />
      ))}
    </StyledList>
  );
};

export default CategoriesList;
