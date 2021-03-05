import NavBar from '../navbar';
import Footer from '../footer';
import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';
import { StyledContainer } from './styledElements';

const Layout: React.FC = (props) => {
  const { lang } = useTranslation();
  let dir = lang === 'en' ? 'ltr' : 'rtl';

  useEffect(() => {
    dir = lang === 'en' ? 'ltr' : 'rtl';
  }, [lang]);

  return (
    <div className='Layout' dir={dir}>
      <NavBar />
      <div style={{ marginTop: 90 }} />
      <StyledContainer>{props.children}</StyledContainer>
      <Footer />
    </div>
  );
};

export default Layout;
