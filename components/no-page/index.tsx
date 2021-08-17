import useTranslation from 'next-translate/useTranslation';
import styles from './styles.module.scss';

const index = () => {
  const { t } = useTranslation('common');
  return <div className={styles.container}>{t`pageNotFound`}</div>;
};

export default index;
