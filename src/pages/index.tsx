import HomepageHeader from 'components/organisms/HomepageHeader/HomepageHeader';
import { headerQuery, categoriesQuery } from 'lib/queries';
import { HeaderData } from 'types/headerTypes';
import fetcher from 'lib/fetcher';
import { CategoriesData } from 'types/categoriesTypes';
import styled from 'styled-components';
import CategoriesList from 'components/molecules/CategoriesList/CategoriesList';

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;

  @media (min-width: 1440px) {
    width: 80%;
    max-width: 1600px;
    margin: 0 auto;
  }
`;

type Props = {
  headerData: HeaderData;
  categoriesData: CategoriesData;
};

const Home = ({ headerData, categoriesData }: Props) => {
  const categories = categoriesData.data.allCategories;
  const headerInfo = headerData.data.allHeaders[0];
  return (
    <>
      <HomepageHeader data={headerInfo} />
      <Wrapper>
        <CategoriesList categories={categories} />
      </Wrapper>
    </>
  );
};

export const getStaticProps = async () => {
  const headerData = await fetcher(headerQuery);
  const categoriesData = await fetcher(categoriesQuery);

  return {
    props: {
      headerData,
      categoriesData,
    },
  };
};

export default Home;
