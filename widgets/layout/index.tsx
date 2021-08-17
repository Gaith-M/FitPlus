import NavBar from '../navbar';
import Footer from '../footer';
import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { themeSelector } from '../../redux/reducers/theme-slice';
import styles from './styles.module.scss';

const Layout: React.FC = (props) => {
  const isLightTheme = useAppSelector(themeSelector);
  const { lang } = useTranslation();
  let dir = lang === 'en' ? 'ltr' : 'rtl';

  useEffect(() => {
    dir = lang === 'en' ? 'ltr' : 'rtl';
  }, [lang]);

  return (
    <>
      <NavBar className={isLightTheme ? 'navbarLight' : 'navbarDark'} />
      <div className={isLightTheme ? 'light' : 'dark'} dir={dir}>
        <div style={{ height: 1 }} />
        <div className={styles.layout}>{props.children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
