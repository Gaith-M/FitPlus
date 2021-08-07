import { themeSelector } from '../redux/reducers/theme-slice';
import { useAppSelector } from '../redux/hooks';
import useTranslation from 'next-translate/useTranslation';
import Meta from '../components/Meta';
import Link from 'next/Link';
// -------------------UI Imports-------------------
import AboutCard from '../components/about-page-main-card';
import { Container } from '../components/shared-components/containers';
import { space_max, space_2 } from '../styles/styleConstants';
import Heading from '../components/heading';
import Paragraph from '../components/paragraph';
import Button from '../components/button';
import styles from '../styles/about.module.scss';

export const About = () => {
  const { t } = useTranslation('about');
  const theme = useAppSelector(themeSelector) ? 'light' : 'dark';
  return (
    <>
      <Meta title='Fit+ About' />
      <Container m={`${space_max} 0 0`} p={`0 0 ${space_max} 0`}>
        <main className={theme}>
          <Heading lvl={1}>{t`whoWeAre`}</Heading>

          {/* add color prop */}
          <AboutCard
            title={t`modernGyms`}
            imgSrc='/gym_photo.jpg'
            className={styles.blogCard}
          >
            <Paragraph>{t`firstCardText`}</Paragraph>
          </AboutCard>

          <AboutCard
            title={t`proStaff`}
            imgSrc='/staff.jpg'
            className={styles.blogCard}
          >
            <Paragraph>{t`secondCardText`}</Paragraph>
          </AboutCard>

          <AboutCard
            title={t`locations`}
            imgSrc='/map.jpg'
            className={styles.blogCard}
          >
            <Paragraph>
              <address className={styles.address}>{t`firstLocation`}</address>
              <address className={styles.address}>{t`secondLocation`}</address>
              <address className={styles.address}>{t`thirdLocation`}</address>
              {t`thirdCardText`}
            </Paragraph>
            <Button w='300px' p='20px 10px' m='50px auto 30px'>
              <Link href='/contact'>
                <a style={{ color: '#f1f1f1' }}>{t`getInTouch`}</a>
              </Link>
            </Button>
          </AboutCard>
        </main>
      </Container>
    </>
  );
};

export default About;
