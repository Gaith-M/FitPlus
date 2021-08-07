import { ArrowDown, ArrowUp } from 'react-feather';
import { useAppSelector } from '../../redux/hooks';
import { dark, secondaryLight } from '../../styles/styleConstants';
import styles from './style.module.scss';

interface compInterface {
  id: string;
  quantity: number;
  color: string;
  flavor: string;
  size: string;
  handleChange: (
    id: string,
    color: string,
    size: string,
    flavor: string,
    quantity: number
  ) => void;
}

const index: React.FC<compInterface> = ({
  handleChange,
  quantity,
  id,
  size,
  color,
  flavor,
}) => {
  const theme = useAppSelector(({ theme }) => theme) ? 'light' : 'dark';
  return (
    <label className={styles.labelStyles}>
      <button className={styles.button}>
        <ArrowUp
          strokeWidth='5'
          height='15'
          width='15'
          stroke={theme === 'light' ? dark : secondaryLight}
          onClick={() => {
            handleChange(id, color, size, flavor, quantity + 1);
          }}
        />
      </button>

      <input
        type='number'
        className={`${styles.numberInput} ${styles.inputStyles}`}
        onChange={({ target: { value } }) => {
          if (+value > 0) {
            handleChange(id, color, size, flavor, +value);
          }
        }}
        value={quantity}
      />

      <button
        className={styles.button}
        onClick={() => {
          if (quantity <= 1) return;
          handleChange(id, color, size, flavor, quantity - 1);
        }}
      >
        <ArrowDown
          strokeWidth='5'
          height='15'
          width='15'
          stroke={theme === 'light' ? dark : secondaryLight}
        />
      </button>
    </label>
  );
};

export default index;
