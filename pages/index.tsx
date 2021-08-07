import { useAppSelector } from '../redux/hooks';
import { themeSelector } from '../redux/reducers/theme-slice';
// --------------------Components--------------------
import CustomeCarousel from '../components/customeCarousel';
import ProductsSection from '../widgets/products-section';
import AboutSection from '../widgets/about-section';
import BlogsSection from '../widgets/blog-section';
import Heading from '../components/heading';
import Meta from '../components/Meta';
import { Container } from '../components/shared-components/containers';
import { space_max } from '../styles/styleConstants';

const Home: React.FC = () => {
  const currentTheme = useAppSelector(themeSelector) ? 'light' : 'dark';
  return (
    <>
      <Meta
        title='Fit+ Home Page'
        description='Fit+ is an e-store that sells everything a modern athletic needs. from suppliments to gear to everything in between. Fit+ also provides a soruce of fitness and diet focused articles written by experts in this field'
      ></Meta>
      <Container m={`${space_max} 0 0`} p={`0 0 ${space_max} 0`}>
        <Heading lvl={1} CN='SEOHeading'>
          Fit+
        </Heading>
        <CustomeCarousel />
        <ProductsSection theme={currentTheme} />
        <BlogsSection theme={currentTheme} />
        <AboutSection theme={currentTheme} />
      </Container>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
