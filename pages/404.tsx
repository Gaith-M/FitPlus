import useTranslation from 'next-translate/useTranslation';

const index = () => {
  const { t } = useTranslation('common');

  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >{t`pageNotFound`}</div>
  );
};

export default index;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
