import useTranslation from 'next-translate/useTranslation';
import Meta from '../components/Meta';
import Link from 'next/Link';
// -------------------UI Imports-------------------
import AboutCard from '../components/about-page-main-card';
import Heading from '../components/heading';
import Paragraph from '../components/paragraph';
import Button from '../components/button';
import styles from '../styles/about.module.scss';

export const About = () => {
  const { t } = useTranslation('about');
  return (
    <>
      <Meta title={t`aboutTitle`} />

      <main style={{ color: 'inherit', paddingBottom: 100 }}>
        <Heading lvl={1}>{t`whoWeAre`}</Heading>

        {/* add color prop */}
        <AboutCard
          title={t`modernGyms`}
          imgSrc='/gym_photo.webp'
          className={styles.blogCard}
        >
          <Paragraph>{t`firstCardText`}</Paragraph>
        </AboutCard>

        <AboutCard
          title={t`proStaff`}
          imgSrc='/staff.webp'
          className={styles.blogCard}
        >
          <Paragraph>{t`secondCardText`}</Paragraph>
        </AboutCard>

        <AboutCard
          title={t`locations`}
          imgSrc='/map.webp'
          className={styles.blogCard}
        >
          <Paragraph>
            <address className={styles.address}>{t`firstLocation`}</address>
            <address className={styles.address}>{t`secondLocation`}</address>
            <address className={styles.address}>{t`thirdLocation`}</address>
            {t`thirdCardText`}
          </Paragraph>
          <Button w='300px' m='50px auto 30px'>
            <Link href='/contact'>
              <a
                style={{
                  color: '#f1f1f1',
                  padding: '15px 10px',
                  display: 'inline-block',
                  width: '100%',
                }}
              >{t`getInTouch`}</a>
            </Link>
          </Button>
        </AboutCard>
      </main>
    </>
  );
};

export default About;
