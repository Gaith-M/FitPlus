// --------------------------Components-------------------------
import Link from 'next/link';
import Facebook from '../../components/svgs/Facebook';
import Twitter from '../../components/svgs/Twitter';
import YouTubeIcon from '../../components/svgs/YouTube';
import Instagram from '../../components/svgs/Instagram';
import LogoIcon from '../../components/svgs/LogoIcon';
import useTranslation from 'next-translate/useTranslation';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');
  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <div className={styles.footerContainer}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <LogoIcon />
        </div>
        <div className={styles.copyRight}>
          <span>Fit+</span> &copy; {new Date().getFullYear()}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <div className={styles.socialMediaParentContainer}>
          <div className={styles.socialMediaIconContainer}>
            <a href='https://www.youtube.com' target='_blank'>
              <YouTubeIcon color='#49494aff' />
            </a>
            <a href='https://www.twitter.com' target='_blank'>
              <Twitter color='#49494aff' />
            </a>
            <a href='https://www.instagram.com' target='_blank'>
              <Instagram color='#49494aff' />
            </a>
            <a href='https://www.facebook.com' target='_blank'>
              <Facebook color='#49494aff' />
            </a>
          </div>
        </div>
        <div className={styles.logoContainer}>
          <Link href='/'>
            <a>
            <LogoIcon />
            </a>
          </Link>
        </div>

        <ul className={styles.footerUL}>
          <li>
            <a href='/privacy-policy'>{t`footer.p-policy`}</a>
          </li>
          <li>
            <a href='/terms-of-service'>{t`footer.t-o-service`}</a>
          </li>
          <li>
            <address className={styles.footerAddress}>
              {t`footer.address`} <br />
              {t`footer.phone`} <br />
              <a href='mailto:mhdgaith94@gmail.com'>{t`footer.email`}</a>
            </address>
          </li>
        </ul>

        <ul className={styles.footerUL}>
          <li>
            <Link href='/'>
              <a>{t`navbar.home`}</a>
            </Link>
          </li>
          <li>
            <Link href='/blogs'>
              <a>{t`navbar.blog`}</a>
            </Link>
          </li>
          <li>
            <Link href='/shop'>
              <a>{t`navbar.shop`}</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>{t`navbar.about`}</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a>{t`navbar.contact`}</a>
            </Link>
          </li>
        </ul>
      </footer>
      <div className={styles.copyRight}>
        <span>Fit+</span> &copy; {new Date().getFullYear()} <br />
        {t`footer.reserved`}
      </div>
    </div>
  );
};

export default Footer;
