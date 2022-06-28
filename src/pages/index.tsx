import styled from 'styled-components';
import HomepageHeader from 'components/organisms/HomepageHeader/HomepageHeader';

const Block = styled.div`
  width: 100%;
  height: calc(100vh - 96px);
`;

const Home = () => {
  return <HomepageHeader />;
};

export default Home;
