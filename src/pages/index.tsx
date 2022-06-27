import Navigation from 'components/organisms/Navigation/Navigation';
import Footer from 'components/organisms/Footer/Footer';
import styled from 'styled-components';

const Block = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
`;

const Home = () => {
  return (
    <>
      <Navigation />
      <Block />
      <Footer />
    </>
  );
};

export default Home;
