import HomepageHeader from 'components/organisms/HomepageHeader/HomepageHeader';
import { headerQuery, categoriesQuery } from 'lib/queries';
import { HeaderData } from 'types/headerTypes';
import fetcher from 'lib/fetcher';
import { CategoriesData } from 'types/categoriesTypes';

type Props = {
  headerData: HeaderData;
  categoriesData: CategoriesData;
};

const Home = ({ headerData, categoriesData }: Props) => {
  const categories = categoriesData.data.allCategories;
  const headerInfo = headerData.data.allHeaders[0];
  return <HomepageHeader data={headerInfo} />;
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
