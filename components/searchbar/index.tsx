import styles from './styles.module.scss';
import { X } from 'react-feather';
import { useRouter } from 'next/router';

interface compInterface {
  w?: string;
  m?: string;
  handleClick?: () => void;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clear: () => void;
  text?: string;
  value?: string;
  refVal?: { current: HTMLInputElement };
}

const index: React.FC<compInterface> = ({
  handleClick,
  handleChange,
  text,
  value,
  clear,
  refVal,
}) => {
  const { locale } = useRouter();
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type='text'
        placeholder={text || 'Search'}
        onChange={handleChange}
        value={value}
        ref={refVal}
      />
      <button
        className={`${styles.clearButton} ${
          locale === 'en' ? styles.right : styles.left
        }`}
        onClick={clear}
      >
        <X
          size='18px'
          color='#4f4d49'
          style={{ position: 'relative', top: 2 }}
        />
      </button>
    </div>
  );
};

export default index;
