import Link from 'next/link';
import StyledButton from '../button';
import { Carousel } from 'react-responsive-carousel';
import styles from './styles.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useTranslation from 'next-translate/useTranslation';

const index = () => {
  const { t } = useTranslation('common');
  return (
    <div dir='ltr' style={{ marginBottom: '30px' }}>
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        emulateTouch
        interval={5000}
      >
        <div style={{ position: 'relative' }}>
          <img src='./slider_one.jpg' />
          <div
            className={styles.slide_contianer}
            style={{
              textAlign: 'start',
              flexDirection: 'column',
            }}
          >
            <h1 className={styles.bannerHeading}>Fit+</h1>
            <p className={styles.slide_text}>{t`banner.sliderOne`}</p>
          </div>
        </div>
        <div>
          <img src='./slider_four.jpg' />
          <div className={styles.slide_contianer}>
            <p
              className={styles.slide_text}
              style={{
                fontWeight: 'bold',
                fontStyle: 'italic',
                padding: 10,
              }}
            >
              {t`banner.sliderTwo`} <br />
              <div className={styles.buttonContainer}>
                <StyledButton w={'200px'} fontSize='18px'>
                  <Link href='/shop'>
                    <a style={{ color: 'inherit' }}>{t`banner.shopNow`}</a>
                  </Link>
                </StyledButton>
              </div>
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default index;
