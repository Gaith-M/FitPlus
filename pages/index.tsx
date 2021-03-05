// --------------------Logic--------------------
import { useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
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
  const { t } = useTranslation('home');

  useEffect(() => {
    const detectSize = () => {
      if (window) {
        window.innerWidth > 900 ? console.log('big') : console.log('small');
        // ? dispatch(SetScreenSize(false))
        // : dispatch(SetScreenSize(true));
      }
    };
    if (window) {
      window.document.addEventListener('DOMContentLoaded', detectSize);
    }
    return () => {
      if (window) {
        window.document.removeEventListener('DOMContentLoaded', detectSize);
      }
    };
  }, []);
  return (
    <>
      <Meta
        title='Fit+ Home Page'
        description='Fit+ is an e-store that sells everything a modern athletic needs. from suppliments to gear to everything in between. Fit+ also provides a soruce of fitness and diet focused articles written by experts in this field'
      ></Meta>
      <Container m={`${space_max} 0`}>
        <Heading lvl={1} CN='SEOHeading'>
          Fit+
        </Heading>
        <CustomeCarousel />
        <BlogsSection />
        <ProductsSection />
        <AboutSection />
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
