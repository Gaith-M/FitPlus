import { useAppSelector } from '../redux/hooks';
import { themeSelector } from '../redux/reducers/theme-slice';
// --------------------Components--------------------
import CustomeCarousel from '../components/customeCarousel';
import ProductsSection from '../widgets/products-section';
import AboutSection from '../widgets/about-section';
import BlogsSection from '../widgets/blog-section';
import Heading from '../components/heading';
import Meta from '../components/Meta';
import useTranslation from 'next-translate/useTranslation';

const Home: React.FC = () => {
  const currentTheme = useAppSelector(themeSelector) ? 'light' : 'dark';
  const { t } = useTranslation('common');
  return (
    <>
      <Meta
        title={t`homePage`}
        description='Fit+ is an e-store that sells everything a modern athletic needs. from suppliments to gear to everything in between. Fit+ also provides a soruce of fitness and diet focused articles written by experts in this field'
      ></Meta>
      <div style={{ paddingBottom: 100 }} className={currentTheme}>
        <Heading lvl={1} CN='SEOHeading'>
          Fit+
        </Heading>
        <CustomeCarousel />

        <ProductsSection />
        <BlogsSection />
        <AboutSection />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
