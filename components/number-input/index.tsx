import styles from './style.module.scss';

interface compInterface {
  id: number;
  value: number;
  handleChange: (id: number, value: number) => void;
}

const index: React.FC<compInterface> = ({ handleChange, value, id }) => {
  return (
    <input
      type='number'
      className={`${styles.numberInput} ${styles.generalStyles}`}
      onChange={(e) => {
        let { value } = e.target;
        +value <= 0 ? null : handleChange(id, +e.target.value);
      }}
      value={value}
    />
  );
};

export default index;
