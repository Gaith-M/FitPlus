import '../styles/globals.css';
import { AppProps } from 'next/app';
import Layout from '../widgets/layout';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // change styles (font size) when sizes changes
  // useEffect(() => {
  //   if (window) {
  //     let detectSize = ({ matches }) =>
  //       matches ? console.log('small') : console.log('lg');
  //     let mql = window.matchMedia('(max-width: 700px)');
  //     mql.addEventListener('change', detectSize);
  //   }
  // }, []);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
