import styles from './style.module.scss';

interface compInterface {
  value: number;
  id: string;
  handleChange: (id: string, qty: number) => void;
}

const index: React.FC<compInterface> = ({ handleChange, value, id }) => {
  return (
    <input
      type='number'
      className={`${styles.numberInput} ${styles.generalStyles}`}
      onChange={({ target: { value } }) => {
        if (+value > 0) {
          handleChange(id, +value);
        }
      }}
      value={value}
    />
  );
};

export default index;
