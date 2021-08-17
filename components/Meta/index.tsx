import Head from 'next/head';

interface metaInterface {
  title?: string;
  description?: string;
  children?: any;
}

const Meta: React.FC<metaInterface> = ({ title, description, children }) => {
  return (
    <Head>
      {children}
      <meta name='description' content={description} />
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
