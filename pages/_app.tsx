import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { toast } from 'react-toastify';
import Layout from '../widgets/layout';
import Meta from '../components/Meta';
import '../styles/globals.css';

toast.configure({
  position: toast.POSITION.BOTTOM_RIGHT,
  limit: 3,
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Meta>
        <link rel='shortcut icon' href='./Fit_Logo.png' />
      </Meta>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
