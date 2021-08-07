import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Layout from '../widgets/layout';
import { toast } from 'react-toastify';
import '../styles/globals.css';

toast.configure({
  position: toast.POSITION.BOTTOM_RIGHT,
  limit: 3,
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
