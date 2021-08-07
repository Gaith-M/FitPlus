import useTranslation from 'next-translate/useTranslation';
import { X } from 'react-feather';
import styles from './styles.module.scss';

interface PropsInterface {
  handleClick: () => void;
  style?: React.CSSProperties;
}

const index: React.FC<PropsInterface> = ({ handleClick, style }) => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.container} style={style}>
      <div className={styles.buttonContainer}>
        <button onClick={handleClick}>
          <X />
        </button>
      </div>
      {t`noResults`}
    </div>
  );
};

export default index;
