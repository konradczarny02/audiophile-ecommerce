import HomepageHeader from 'components/organisms/HomepageHeader/HomepageHeader';
import { headerQuery, HeaderResponse } from 'lib/queries';
import { API_URL } from 'lib/constants';

type Data = {
  data: {
    allHeaders: HeaderResponse[];
  };
};

type Props = { data: Data };

const Home = ({ data }: Props) => {
  return <HomepageHeader data={data.data.allHeaders[0]} />;
};

export const getStaticProps = async () => {
  const token = process.env.API_KEY;

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: headerQuery,
    }),
  });
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Home;
